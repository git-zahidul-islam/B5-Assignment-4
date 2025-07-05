import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = (
    <>
      <li className="font-semibold">
        <NavLink
          to="/books"
          onClick={handleNavClick}
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 relative pb-1"
              : "text-primary hover:text-yellow-400 relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 after:ease-out after:w-0 hover:after:w-full after:-translate-x-1/2"
          }
        >
          All Books
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink
          to="/create-book"
          onClick={handleNavClick}
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 relative pb-1"
              : "text-primary hover:text-yellow-400 relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 after:ease-out after:w-0 hover:after:w-full after:-translate-x-1/2"
          }
        >
          Add Book
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink
          to="/borrow-summary"
          onClick={handleNavClick}
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 relative pb-1"
              : "text-primary/90 hover:text-yellow-400 relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 after:ease-out after:w-0 hover:after:w-full after:-translate-x-1/2"
          }
        >
          Borrow Summary
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="py-2 bg-gradient-to-r from-gray-600 to-green-700 text-white">
      <div className="flex items-center justify-between w-[90%] mx-auto">
        <div className="">
          <Link to="/" className="flex items-center space-x-2 gap-2">
            <div className="mx-auto bg-primary  rounded-full flex items-center justify-center w-12 h-12">
              <BookOpen className="w-8 h-8 text-white p-1" />
            </div>
            <h1 className="hidden lg:flex text-lg font-bold ">
              Library Management
            </h1>
          </Link>
        </div>

        {/* desktop navLink */}
        <div className="hidden lg:flex items-center space-x-10">
          <ul className="flex space-x-10 list-none text-black text-lg">
            {navLinks}
          </ul>
        </div>

        {/* mobile navLink */}
        <div className="lg:hidden flex justify-between w-full">
          <p className="font-semibold tetx-lg mt-1">Library Management</p>
          <Menu
            className="w-8 h-8 text-yellow-500 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-0 left-0 w-full h-screen bg-white transition-transform duration-500 z-50 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <X
            className="w-8 h-8 text-yellow-500 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <div className="flex flex-col items-center space-y-4 p-4">
          <ul className="list-none space-y-4 text-center text-black">
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
