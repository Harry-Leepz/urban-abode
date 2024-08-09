import PropertyHeaderImage from "@/components/properties/property-header-image";

import connectDb from "../../../../config/database";
import Property from "../../../../models/Property";
import { TProperty } from "@/lib/types";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

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
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            href='/properties'
            className='text-slate-900 flex items-center hover:underline'
          >
            <FaArrowLeft className='mr-2 cursor-pointer' />
            Back to Properties
          </Link>
        </div>
      </section>
      <section className='bg-slate-100'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            {/*  Property Details */}
          </div>
        </div>
      </section>
    </>
  );
}
