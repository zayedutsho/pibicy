import React, { useState, useRef, useEffect } from "react";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const dropdownRef = useRef(null); // Removed type annotation

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  // Handle clicks outside of the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between px-2 py-2 w-24 text-sm font-medium text-primary rounded-md border border-primary-1 focus:outline-none focus:ring-2 transition duration-150 ease-in-out"
      >
        <span className="truncate">{selectedLanguage}</span>
        <svg
          className="w-5 h-5 ml-1 -mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-white transition-opacity rounded-md duration-150 ease-in-out">
          <div className="py-1">
            <ul>
              {["English", "Spanish", "French", "German"].map((language) => (
                <li key={language}>
                  <button
                    onClick={() => selectLanguage(language)}
                    className="block w-full px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                  >
                    {language}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
