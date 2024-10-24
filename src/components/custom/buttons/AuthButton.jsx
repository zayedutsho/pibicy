import Link from "next/link";
import React from "react";

const AuthButton = ({ href, title, isActive }) => {
  const className = `text-lg font-bold flex items-center gap-2 ${
    isActive ? "text-secondary border-b-2 border-secondary" : "text-primary"
  }`;

  const RegisterClassName = "";

  const style = isActive
    ? { borderBottomWidth: "2px", borderColor: "var(--tw-border-secondary)" }
    : {};

  const selectedClass = isActive ? className : "";

  const selectedStyle = isActive ? style : {};

  return (
    <Link href={href} style={selectedStyle} className={selectedClass}>
      {" "}
      {title}
    </Link>
  );
};

export default AuthButton;
