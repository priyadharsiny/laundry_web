import React, { useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

const SidebarItem = ({ sidebarLink, activeLink }) => {
  const active = activeLink ? "bg-lighter-blue" : "";

  const navigate = useNavigate();
  const { getLoggedIn } = useContext(AuthContext);

  const logout = async () => {
    await axios.get("/users/logout");
    await getLoggedIn();
    navigate("/");
  };

  return (
    <li
      className={`hover:text-gray-900 text-gray-800 focus:text-gray-900 ${active}`}
    >
      {sidebarLink.path ? (
        <Link
          to={sidebarLink.path}
          className="flex flex-row items-center h-16 py-2 font-semibold p-5 hover:translate-x-2 transform transition-transform ease-in duration-200"
        >
          <span className="inline-flex items-center justify-center h-12 w-12 text-2xl pl-5">
            {sidebarLink.icon}
          </span>
          <span className="mx-5 font-semibold text-base">
            {sidebarLink.name}
          </span>
        </Link>
      ) : (
        <button
          onClick={logout}
          className="flex flex-row items-center h-16 py-2 font-semibold p-5 hover:translate-x-2 transform transition-transform ease-in duration-200"
        >
          <span className="inline-flex items-center justify-center h-12 w-12 text-2xl pl-5">
            {sidebarLink.icon}
          </span>
          <span className="mx-5 font-semibold text-base">
            {sidebarLink.name}
          </span>
        </button>
      )}
    </li>
  );
};

export default SidebarItem;
