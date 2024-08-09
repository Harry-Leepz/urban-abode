import PropertyHeaderImage from "@/components/properties/property-header-image";

import connectDb from "../../../../config/database";
import Property from "../../../../models/Property";
import { TProperty } from "@/lib/types";

type PropertyDetailsProps = {
  params: {
    id: string;
  };
};

export default async function PropertyDetails({
  params,
}: PropertyDetailsProps) {
  connectDb();

  const property: TProperty | null = await Property.findById(params.id).lean();

  return (
    <>
      <PropertyHeaderImage
        propertyImage={property?.images[0] || ""}
        propertyName={property?.name || ""}
      />
      <section></section>
    </>
  );
}
