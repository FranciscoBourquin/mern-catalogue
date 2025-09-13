import { NavLink } from "react-router-dom";
import {FranTechLogo} from "./FranTechLogo";

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        <NavLink to="/" className="flex items-center">
          <FranTechLogo />
        </NavLink>

        
        <ul className="flex space-x-8">
          
          <li className="relative group">
            <span className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">
              Productos
            </span>

            <ul
              className="absolute left-0 top-full w-48 bg-white border rounded-lg shadow-lg
                         opacity-0 group-hover:opacity-100
                         pointer-events-none group-hover:pointer-events-auto
                         transition duration-200"
            >
              <li>
                <NavLink
                  to="/productos/televisores"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Televisores
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/productos/laptops"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Laptops
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/productos/smartphones"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Smartphones
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
