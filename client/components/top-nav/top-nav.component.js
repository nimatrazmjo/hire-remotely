import Link from 'next/link'
import Image from 'next/image';

function TopNavComponent() {
  return (
    <div className=' bg-primary'>

      <header class=" max-w-7xl mx-auto flex items-center text-white py-2 content-between ">
        <div class="logo">
          <Link href="/">
          <Image width={200} height={50} src="/icons/logo.svg" alt="logo" />
          </Link>
        </div>
        <nav class="flex-1 px-4 md:px-10">
          <Link href="https://www.hiremotely.com/top-developers" passHref>
            <a class="text-white mx-4 font-bold text-sm" target="_blank">Developers</a>
          </Link>
          <Link href="https://www.hiremotely.com/freelance-cto">
            <a class="text-white mx-4 font-bold text-sm" target="_blank">CTOs</a>
          </Link>
          <Link href="https://www.hiremotely.com/freelance-recruiters">
            <a class="text-white mx-4 font-bold text-sm" target="_blank">IT Recruiters</a>
          </Link>

          <Link href="https://www.hiremotely.com/why-hiremotely">
            <a class="text-white mx-4 font-bold text-sm" target="_blank">WHy Hiremotely</a>
          </Link>

          <Link href="https://www.hiremotely.com/customer-reviews">
            <a class="text-white mx-4 font-bold text-sm" target="_blank">Reviews</a>
          </Link>


        </nav>
        <div class="flex items-center">
          <Link href="https://www.hiremotely.com/apply-as-freelancer">
            <a class="text-white mx-4 font-bold text-sm" target="_blank">Apply as a Developer</a>
          </Link>
          <Link href="https://www.hiremotely.com/hire-freelance-developer">
            <a class="text-white mx-4 font-bold bg-main-green px-4 py-2 rounded-md text-sm" target="_blank">Find a Developer</a>
          </Link>
        </div>

      </header>
    </div>
  )
}
export default TopNavComponent