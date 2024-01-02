// src/components/Slider.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Sidebar.css"; // Slider için özel stiller

const Sidebar = () => {
  return (
    <div>
      <div className="flex h-screen w-64  border-r-2">
        <div className="flex flex-col">
          <div className="mt-5 ml-5 mb-5">
            <span>Logo</span>
          </div>
          <div className="flex flex-col m-5 gap-3 ">
            <span>Ev</span>
            <span>Görevler</span>
            <span>İstatistik</span>
            <span>Çıkış Yap</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
