import React, { useState, useRef } from "react";
import { Link } from "react-router-dom"; // If using React Router

const menuItems = [
  {
    name: "About",
    dropdown: [
      { label: "About Us", link: "/about-us" },
      { label: "Faculty", link: "/faculty" },
      { label: "Advisors", link: "/advisors" },
      { label: "Team of 2025", link: "/team-2025" }
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
    ],
  },
  {
    name: "Archives",
    dropdown: [
      { label: "Achivements", link: "/achievements" },
      { label: "Endorsements", link: "/endorsements" },
      { label: "Discord", link: "/discord" }
    ],
  },
];

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  // Open dropdown
  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current); // Prevent closing when hovering back
    setActiveDropdown(index);
  };

  // Delayed close when mouse leaves
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // Delay of 200ms to allow moving to dropdown
  };

  return (
    <div className="px-10 pr-36 py-4 shadow-md">
      {/* Logo & Navigation in the same flex container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src="logo.png" className="rounded-full h-16 cursor-pointer" alt="Logo" />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav>
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
                    onMouseEnter={() => clearTimeout(timeoutRef.current)} // Prevent closing
                    onMouseLeave={handleMouseLeave} // Close when leaving
                  >
                    {item.dropdown.map((option, i) => (
                      <li key={i}>
                        {/* If using React Router */}
                        <Link
                          to={option.link}
                          className="block px-4 py-2 text-white hover:text-indigo-500 transition"
                        >
                          {option.label}
                        </Link>

                        {/* If using normal anchor tags */}
                        {/* <a href={option.link} className="block px-4 py-2 text-white hover:text-indigo-500 transition">
                          {option.label}
                        </a> */}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
