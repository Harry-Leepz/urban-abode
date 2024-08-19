"use server";

import connectDb from "../../../config/database";
import Property from "../../../models/Property";
import { getSessionUser } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function addPropertyAction(formData: FormData) {
  // Connect to the database
  await connectDb();
  const sessionUser = await getSessionUser();

  // If there is no user, redirect to the login page
  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  // Access all values from amenities and images
  const amenities = formData.getAll("amenities");
  const images = formData
    .getAll("images")
    .filter(
      (image): image is File => image instanceof File && image.name !== ""
    )
    .map((image) => image.name);

  // Get all form data for property
  const propertyData = {
    owner: userId,
    type: formData.get("type"),
    name: formData.get("name"),
    description: formData.get("description"),
    location: {
      street: formData.get("location.street"),
      city: formData.get("location.city"),
      state: formData.get("location.state"),
      zipcode: formData.get("location.zipcode"),
    },
    beds: formData.get("beds"),
    baths: formData.get("baths"),
    square_feet: formData.get("square_feet"),
    amenities,
    rates: {
      nightly: formData.get("rates.nightly"),
      weekly: formData.get("rates.weekly"),
      monthly: formData.get("rates.monthly"),
    },
    seller_info: {
      name: formData.get("seller_info.name"),
      phone: formData.get("seller_info.phone"),
      email: formData.get("seller_info.email"),
    },
    images,
  };

  // Create a new property
  const newProperty = new Property(propertyData);
  await newProperty.save();

  // Revalidate the cache
  revalidatePath("/", "layout");
  redirect(`/properties/${newProperty._id}`);
}
