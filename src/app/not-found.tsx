import Link from "next/link";

import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className='bg-slate-100 min-h-screen flex-grow'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <div className='flex justify-center'>
            <FaExclamationTriangle className='text-8xl text-yellow-500' />
          </div>
          <div className='text-center'>
            <h1 className='text-3xl font-bold mt-4 mb-2'>Page Not Found</h1>
            <p className='text-gray-500 text-xl mb-10'>
              The page you are looking for does not exist.
            </p>
            <Link
              href='/'
              className='bg-slate-900 hover:bg-slate-700 text-white font-bold py-4 px-6 rounded'
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
      <div className='flex-grow'></div>
    </section>
  );
}