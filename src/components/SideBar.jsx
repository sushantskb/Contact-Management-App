import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 bg-gray-800 text-white w-64 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 z-20`}
      >
        <div className="p-4" style={{ marginTop: "50px" }}>
          <Link to="/dashboard">
            <h2 className="text-2xl font-bold">Dashboard</h2>
          </Link>
        </div>
        <nav className="mt-10">
          <NavLink
            to="/"
            exact
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            activeClassName="bg-gray-700"
          >
            Home
          </NavLink>
          <NavLink
            to="/contacts"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            activeClassName="bg-gray-700"
          >
            Contacts
          </NavLink>
        </nav>
      </div>
      <button
        className="md:hidden fixed top-4 left-4 z-30 bg-blue-600 text-white p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Menu"}
      </button>
    </>
  );
};

export default Sidebar;
