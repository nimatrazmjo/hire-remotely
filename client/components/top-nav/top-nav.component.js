import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';

function TopNavComponent() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <header className='bg-primary'>
      <nav className='max-w-7xl mx-auto flex items-center flex-wrap p-3 '>
        <Link href="/">
          <Image width={200} height={50} src="/icons/logo.svg" alt="logo" />
        </Link>
        <button className=' inline-flex p-3 hover:bg-gray-900 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div className={`${active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className='lg:inline-flex lg:flex-row lg:mr-auto lg:w-auto lg:ml-6 w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href="https://www.hiremotely.com/top-developers" passHref>
              <a className="text-main-gray my-2 mx-4 font-bold text-sm" target="_blank">Developers</a>
            </Link>
            <Link href="https://www.hiremotely.com/freelance-cto">
              <a className="text-main-gray my-2 mx-4 font-bold text-sm" target="_blank">CTOs</a>
            </Link>
            <Link href="https://www.hiremotely.com/freelance-recruiters">
              <a className="text-main-gray my-2 mx-4 font-bold text-sm" target="_blank">IT Recruiters</a>
            </Link>

            <Link href="https://www.hiremotely.com/why-hiremotely">
              <a className="text-main-gray my-2 mx-4 font-bold text-sm" target="_blank">WHy Hiremotely</a>
            </Link>

            <Link href="https://www.hiremotely.com/customer-reviews">
              <a className="text-main-gray my-2 mx-4 font-bold text-sm" target="_blank">Reviews</a>
            </Link>
          </div>
          <hr className='border-light-blue my-4 border-solid border-1 w-full lg:hidden' />
          <div className="flex lg:items-center flex-col lg:flex-row md:items-start">
            <Link href="https://www.hiremotely.com/apply-as-freelancer">
              <a className="text-white mx-4 my-2 font-bold text-sm" target="_blank">Apply as a Developer</a>
            </Link>
            <Link href="https://www.hiremotely.com/hire-freelance-developer">
              <a className="text-white mx-4 font-bold bg-main-green px-4 py-2 rounded-md text-sm" target="_blank">Find a Developer</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default TopNavComponent