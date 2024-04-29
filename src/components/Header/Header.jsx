import React from "react";
import{Link} from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0 ">
      <nav className="bg-white border-gray-200 px-4 xl:px-6 lg:px-6 py-2.5 w-full lg:w-full sm:w-[125vh] xs:w-[80vh]">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          
         
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col  mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                to="/home"
                  className={(isActive) =>
                    `block py-2 pr-4 pl-3 duration-200
                    ${isActive}? " text-orange-700" :" text-red-700"
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Job
                </NavLink>
            </li>
            <li>    
                <NavLink
                to="/about"
                  className={(isActive) =>
                    `block py-2 pr-4 pl-3 duration-200
                    ${isActive}? " text-orange-700" :" text-red-700"
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Company
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/contact"
                  className={(isActive) =>
                    `block py-2 pr-4 pl-3 duration-200
                    ${isActive}? " text-orange-700" :" text-red-700"
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Change Language
                </NavLink>
              </li>
             
              <li>
                <NavLink
                to="/github"
                  className={(isActive) =>
                    `block py-2 pr-4 pl-3 duration-200
                    ${isActive}? " text-orange-700" :" text-red-700"
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                  }
                >
                  Login
                </NavLink>
              </li>
            </ul>
            <div className="flex p-2 justify-center">
           <a className=" bg-indigo-700 px-3 py-1.5 rounded-md text-white ml-3">
                <NavLink
                to="/github"
                  className={(isActive) =>
                    `block py-2 pr-4 pl-3 duration-200
                    ${isActive}? " text-orange-700" :" text-red-700"
                    border-b border-gray-100  lg:hover:bg-transparent lg:border-0 hover:bg-yellow-700! lg:p-0  `
                  }
                >
                  Register
                </NavLink>
              </a>

            </div>
            
          </div>
        </div>
      </nav>
    </header>
  );
}
