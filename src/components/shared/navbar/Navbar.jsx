"use client"; // This directive tells Next.js to run this component on the client side
import Image from "next/image"; // Use Next.js Image component for optimized images
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Link from "next/link";
import Logo from "../../../assets/logo.png"; // Make sure the path to the logo is correct
import PrimaryButton from "../../../components/custom/buttons/PrimaryButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 md:px-12 lg:px-24 py-5 flex items-center justify-between fixed top-0 z-[1000] z-[999] bg-white">
      <Link href="/">
        <Image src={Logo} alt="logo" className="w-[126px] h-[42px]" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex menu-horizontal gap-8">
        {["Home", "Pricing", "Blog", "About", "Contact"].map((item, index) => (
          <li
            key={index}
            className=" font-poppins text-sm capitalize transition-colors duration-200 text-[18px] "
          >
            <Link href={`/${item.toLowerCase().replace(" ", "-")}`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex">
        <PrimaryButton value={"Sign Up"} linkTo={"/signup"} />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden transition-all"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <RiCloseLine size={30} className="text-black " />
        ) : (
          <RiMenu3Line size={30} />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[60%] bg-white shadow-lg transform transition-transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="md:hidden  px-6 pt-[20px]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <RiCloseLine size={35} /> : ""}
        </button>
        <ul className="flex flex-col gap-6 mt-10 p-6 ">
          {["Home", "Pricing", "Blog", "About", "Contact"].map(
            (item, index) => (
              <li key={index} className="font-poppins text-base capitalize">
                <Link
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            )
          )}
          <li className="font-poppins text-base capitalize">
            <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
          <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
            <button className="bg-[#F47108] text-white px-8 py-2 rounded-full">
              Sign up
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
