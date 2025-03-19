import React, { useState, useRef } from "react";
import { Link } from "react-router-dom"; // If using React Router
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const menuItems = [
  {
    name: "About",
    dropdown: [
      { label: "About Us", link: "/about-us" },
      { label: "Faculty", link: "/faculty" },
      { label: "Advisors", link: "/advisors" },
      { label: "Team of 2025", link: "/team-2025" },
    ],
  },
  {
    name: "Events",
    dropdown: [
      { label: "Upcoming Events", link: "/events/upcoming" },
      { label: "Past Events", link: "/events/past" },
      { label: "Get Involved", link: "/events/involved" },
    ],
  },
  {
    name: "Community",
    dropdown: [
      { label: "Forum", link: "/community/forum" },
      { label: "Resources", link: "/community/resources" },
      { label: "Support", link: "/community/support" },
      { label: "Discord", link: "/discord" },
    ],
  },
  {
    name: "Archives",
    dropdown: [
      { label: "Achievements", link: "/achievements" },
      { label: "Endorsements", link: "/endorsements" },
    ],
  },
];

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Open dropdown
  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(index);
  };

  // Delayed close when mouse leaves
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <div className="px-6 sm:px-10 sm:pr-36 py-4 shadow-md bg-black text-white relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              src="logo.png"
              className="rounded-full h-12 sm:h-16 cursor-pointer"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-lg font-semibold hover:text-indigo-500 transition">
                  {item.name}
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === index && (
                  <ul
                    className="absolute left-0 mt-2 w-48 bg-zinc-950 shadow-lg rounded-lg"
                    onMouseEnter={() => clearTimeout(timeoutRef.current)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.dropdown.map((option, i) => (
                      <li key={i}>
                        <Link
                          to={option.link}
                          className="block px-4 py-2 hover:text-indigo-500 transition"
                        >
                          {option.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="h-8 w-8 text-white" />
          ) : (
            <Menu className="h-8 w-8 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu - Floating */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMobileMenu}
          ></div>

          {/* Menu */}
          <div className="absolute top-16 right-0 left-0 ml-32 mr-5 mt-10 bg-zinc-900 shadow-lg rounded-lg z-50 p-4">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <button
                    className="w-full text-left text-lg font-semibold hover:text-indigo-500 transition"
                    onClick={() =>
                      setActiveDropdown(activeDropdown === index ? null : index)
                    }
                  >
                    {item.name}
                  </button>

                  {activeDropdown === index && (
                    <ul className="mt-2 space-y-2">
                      {item.dropdown.map((option, i) => (
                        <li key={i}>
                          <Link
                            to={option.link}
                            className="block px-4 py-2 hover:text-indigo-500 transition"
                          >
                            {option.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
