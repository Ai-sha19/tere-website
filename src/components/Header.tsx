import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-12 px-4 md:px-20">
      {/* Logo */}
      <div>
        <Image width={100} height={40} src="/logo.png" alt="logo" />
      </div>

      {/* Navigation */}
      <nav className="mt-4 md:mt-0">
        <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 font-thin text-[16px] md:text-[17px]">
          <li>
            <Link
              className="transition duration-200 hover:text-[#75BF7A]"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="transition duration-200 hover:text-[#75BF7A]"
              href="/tere-works"
            >
              How tere works
            </Link>
          </li>
          <li>
            <Link
              className="transition duration-200 hover:text-[#75BF7A]"
              href="/tere-benefits"
            >
              Tere Benefits
            </Link>
          </li>
          <li className="flex justify-center items-center w-[120px] md:w-[145px] h-[40px] md:h-[45px] bg-customGreen text-white rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-customGreen hover:border hover:border-customGreen hover:scale-100">
            <Link href="/help-center">
              <button>Help Center</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}