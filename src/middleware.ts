export { default } from "next-auth/middleware";

/*
  Following routes are protected and required the user to be logged in.
  /properties/add
  /properties/saved
  /profile
  /messages
*/
export const config = {
  matcher: ["/properties/add", "/profile", "/properties/saved", "/messages"],
};
