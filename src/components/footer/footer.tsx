import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='bg-slate-900 py-4 mt-auto'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-4'>
        <div className='mb-4 md:mb-0'>
          <Image
            className='h-10 w-auto'
            src='/logo-white.png'
            alt='PropertyPulse'
            width={40}
            height={40}
          />
        </div>
        <div className='flex flex-wrap justify-center md:justify-start mb-4 md:mb-0 text-white'>
          <ul className='flex space-x-4'>
            <li>
              <Link href='/properties.html'>Properties</Link>
            </li>
            <li>
              <Link href='/terms.html'>Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='text-sm text-white mt-2 md:mt-0'>
            &copy; 2024 PropertyPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
