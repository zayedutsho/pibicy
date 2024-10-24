import Image from "next/image";
import logo from "../../../assets/logo.png";
import Link from "next/link";
import instaIcon from "../../../assets/icons/insta.png";
import fbIcon from "../../../assets/icons/fb.png";
import twitterIcon from "../../../assets/icons/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#F4F4F4] px-6 md:px-24">
      <div className="md:grid md:grid-cols-[5fr,7fr] py-24">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <Image
            src={logo}
            alt="Pibicy Logo"
            className="w-[126px] h-[42px]mx-auto md:mx-0 mb-4"
          />
          <p>
            All your audit support documents, in one <br />
            place, for audit teams and clients, from <br />
            start to finish.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-12 md:gap-y-0 md:grid-cols-4">
          <div className="flex flex-col  gap-5">
            <h4 className="text-lg font-[700]">Navigate</h4>
            <Link href={"/"}>Home</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/about"}>About</Link>
          </div>

          <div className="flex flex-col  gap-5">
            <h4 className="text-lg font-[700]">Support Us</h4>
            <Link href={"/"}>FAQ's</Link>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"/support"}>Support</Link>
            <Link href={"/center"}>Center</Link>
            <Link href={"/security"}>Security</Link>
          </div>
          <div className="flex flex-col  gap-5">
            <h4 className="text-lg font-[700]">Partner</h4>
            <Link href={"/"}>Our Partners</Link>
            <Link href={"/pricing"}>Subscriber</Link>
          </div>
          <div className="flex flex-col  gap-5">
            <h4 className="text-lg font-[700]">Contact Us</h4>
            <p>
              pibicy@business.com <br />
              +6177010 6803{" "}
            </p>

            <div className="flex gap-3 md:mt-4">
              <Image src={instaIcon} alt="Instagram Pibicy" />
              <Image src={twitterIcon} alt="Twitter Pibicy" />
              <Image src={fbIcon} alt="Facebook Pibicy" />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-1 border-black" />
      <div className="py-8 text-xs flex justify-between">
        <p>&copy;2024 pibicy</p>
        <div>
          <Link href={"/"}>Terms & Conditions, </Link>
          <Link href={"/"}>Privacy Policy, </Link>
          <Link href={"/"}>Sitemap</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
