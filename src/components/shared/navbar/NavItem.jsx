import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// Array of navigation items (names and URLs)
const navItems = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "about", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const NavItem = ({ item, onClick }) => {
  const pathname = usePathname();

  // Determine if the current item is active
  const isActive = pathname === item.href;

  // Conditional classes and styles
  const className = `text-md font-semibold flex items-center gap-2 ${
    isActive ? "text-[#F47108]" : "text-black"
  }`;

  

  return (
    <div className="relative">
      <Link
        href={item?.href}
        // style={style}
        className={className}
        onClick={onClick}
      >
        {item?.name}
      </Link>
    </div>
  );
};

export default NavItem;