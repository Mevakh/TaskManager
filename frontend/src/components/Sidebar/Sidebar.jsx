import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Sidebar.css";

const Sidebar = () => {
  const logo =
    "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=826&t=st=1704389437~exp=1704390037~hmac=b665dcfa99c1eddeb49d25c1c0f172f85687e4fcab92d53611867d0e1ba64601";
  return (
    <div className="h-screen flex">
      <div className="w-64 px-8 py-4 border-r">
        <div>
          <img src={logo} alt="" className="w-9 h-9" />
        </div>
        <nav className="mt-8">
          <h3 className="text-sm">A</h3>
          <div className="mt-2 -m-3">
            <a
              href="#"
              className="flex justify-between items-center bg-gradient-to-r from-purple-700 to-blue-500 rounded-md px-3"
            >
              <span>Home</span>

              <span>Dashboard</span>
            </a>
          </div>
        </nav>
      </div>
      <div className="flex-1 min-w-0">C</div>
    </div>
  );
};

export default Sidebar;
