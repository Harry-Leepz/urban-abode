"use server";

export default async function addPropertyAction(formData: FormData) {
  console.log("Add Property Action");
  console.log(formData.get("name"));
}
