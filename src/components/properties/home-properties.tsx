import Link from "next/link";

import PropertyCard from "./property-card";

import connectDb from "../../../config/database";
import Property from "../../../models/Property";
import { TProperty } from "@/lib/types";

export default async function HomeProperties() {
  await connectDb();
  const recentProperties: TProperty[] = await Property.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();

  return (
    <>
      <section className='px-4 py-6 bg-slate-100'>
        <div className='container-xl lg:container m-auto px-4 py-6 '>
          <h2 className='text-3xl font-bold text-slate-900 mb-6 text-center'>
            Recent Properties
          </h2>
          {recentProperties.length === 0 ? (
            <p>No properties found...</p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className='m-auto max-w-lg my-6 px-6'>
        <Link
          href='/properties'
          className='block text-center py-4 text-white rounded-xl px-6 bg-slate-900 hover:bg-slate-600'
        >
          View All Properties
        </Link>
      </section>
    </>
  );
}
