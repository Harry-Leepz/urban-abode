import { TProperty } from "@/lib/types";
import {
  FaBath,
  FaBed,
  FaCheck,
  FaRuler,
  FaTimes,
  FaMapMarker,
} from "react-icons/fa";

type PropertyInfoProps = {
  property: TProperty;
};

export default function PropertyInfo({ property }: PropertyInfoProps) {
  const {
    type,
    name,
    location,
    rates,
    beds,
    baths,
    square_feet,
    description,
    amenities,
  } = property;
  const { street, city, zipcode } = location;
  const { nightly, weekly, monthly } = rates;

  const noMatchingRates = <FaTimes className='text-red-700' />;

  return (
    <main>
      <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
        <div className='text-gray-500 mb-4'>{type}</div>
        <h1 className='text-3xl font-bold mb-4'>{name}</h1>
        <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
          <FaMapMarker className='text-lg text-orange-700 mr-2' />
          <p className='text-orange-700'>{`${street}, ${city} ${zipcode}`}</p>
        </div>
        {/* Rates and Options */}
        <h3 className='text-lg font-bold my-6 bg-gray-800 text-white p-2'>
          Rates & Options
        </h3>
        <div className='flex flex-col md:flex-row justify-around'>
          <div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
            <div className='text-gray-500 mr-2 font-bold'>Nightly</div>
            <div className='text-2xl font-bold'>
              {nightly ? `$${nightly}` : noMatchingRates}
            </div>
          </div>
          <div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
            <div className='text-gray-500 mr-2 font-bold'>Weekly</div>
            <div className='text-2xl font-bold '>
              {weekly ? `$${weekly}` : noMatchingRates}
            </div>
          </div>
          <div className='flex items-center justify-center mb-4 pb-4 md:pb-0'>
            <div className='text-gray-500 mr-2 font-bold'>Monthly</div>
            <div className='text-2xl font-bold '>
              {monthly ? `$${monthly}` : noMatchingRates}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Description & Details --> */}
      <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
        <h3 className='text-lg font-bold mb-6'>Description & Details</h3>
        <div className='flex justify-center gap-4  mb-4 text-xl space-x-9'>
          <p>
            <FaBed className='inline-block mr-2' /> {beds}{" "}
            <span className='hidden sm:inline'>Beds</span>
          </p>
          <p>
            <FaBath className='inline-block mr-2' /> {baths}{" "}
            <span className='hidden sm:inline'>Baths</span>
          </p>
          <p>
            <FaRuler className='inline-block mr-2' />
            {square_feet} <span className='hidden sm:inline'>sqft</span>
          </p>
        </div>
        <p className='text-gray-500 mb-4'>{description}</p>
      </div>
      {/* <!-- Amenities --> */}
      <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
        <h3 className='text-lg font-bold mb-6'>Amenities</h3>

        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none'>
          {amenities.map((amenity, index) => (
            <li key={index}>
              <FaCheck className='text-green-500 inline-block mr-2' />
              {amenity}
            </li>
          ))}
        </ul>
      </div>
      {/* <!-- Map --> */}
      <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
        <div id='map'></div>
      </div>
    </main>
  );
}
