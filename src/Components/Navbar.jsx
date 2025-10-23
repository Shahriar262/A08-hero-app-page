import React from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-[#FFFFFF] shadow-sm md:px-[120px]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/" className="font-semibold text-[#000000e6]">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/apps" className="font-semibold text-[#000000e6]">
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className="font-semibold text-[#000000e6]"
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <img src={logoImg} className="w-9 h-9" alt="Hero logo image" />
          </div>
          <div>
            <Link
              to="/"
              className="text-base font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
            >
              HERO.IO
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold"
                  : "font-semibold text-[#000000e6]"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold"
                  : "font-semibold text-[#000000e6]"
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold"
                  : "font-semibold text-[#000000e6]"
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button
          onClick={() =>
            window.open("https://github.com/Shahriar262", "_blank")
          }
          className="btn w-[140px] h-40px bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
        >
          <div className="flex items-center gap-[6px]">
            <FaGithub className="text-white" />
            <span className="font-semibold text-white">Contribute</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
