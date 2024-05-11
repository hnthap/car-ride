import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-32 h-10 bg-white rounded-lg items-center justify-center flex font-bold shadow-xl"
      >
        <p className="green-gradient_text font-serif text-sm">Car Ride</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Settings
        </NavLink>
      </nav>
    </header>
  );
}
