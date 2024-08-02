import Link from "next/link";

export default function MobileMenu() {
  return (
    <div id='mobile-menu'>
      <div className='space-y-1 px-2 pb-3 pt-2'>
        <Link
          href='/'
          className='bg-black text-white block rounded-md px-3 py-2 text-base font-medium'
        >
          Home
        </Link>
        <Link
          href='/properties'
          className='text-white block rounded-md px-3 py-2 text-base font-medium'
        >
          Properties
        </Link>
        <Link
          href='/properties/add'
          className='text-white block rounded-md px-3 py-2 text-base font-medium'
        >
          Add Property
        </Link>
        <button className='flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-5'>
          <i className='fa-brands fa-google mr-2'></i>
          <span>Login or Register</span>
        </button>
      </div>
    </div>
  );
}
