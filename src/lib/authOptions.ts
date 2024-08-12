import GoogleProvider from "next-auth/providers/google";

import connectDb from "../../config/database";
import User from "../../models/User";

if (!process.env.GOOGLE_CLIENT_ID) {
  throw new Error("Missing GOOGLE_CLIENT_ID environment variable");
}

if (!process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error("Missing GOOGLE_CLIENT_SECRET environment variable");
}

type Profile = {
  email: string;
  name: string;
  picture: string;
};

type Session = {
  user: {
    email: string;
    id: string;
  };
};

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invokes on succesful sign in
    async signIn({ profile }: { profile: Profile }) {
      // 1. Connect to the database
      await connectDb();
      // 2. Check if the user already exists
      const userExists = await User.findOne({ email: profile.email });
      // 3. If not, create a new user
      if (!userExists) {
        // Trauncate the user's name
        const username = profile.name.slice(0, 20);
        // Create a new user
        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }
      // 4. Return true to allow sign in
      return true;
    },
    // Session callback function that modifies the session object
    async session({ session }: { session: Session }) {
      // 1. Get the user from the database
      const user = await User.findOne({ email: session.user.email });
      // 2. Add the user to the session
      session.user.id = user._id.toString();
      // 3. return session;
      return session;
    },
  },
};
