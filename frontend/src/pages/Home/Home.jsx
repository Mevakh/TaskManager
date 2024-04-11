import { React, useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  return (
    <div>
      <nav class="border-black dark:bg-gray-900 dark:border-gray-700 border-b-2">
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
          <a>
            <span className="text-2xl">Task Manager</span>
          </a>
          <div className="">
            <ul className="flex flex-wrap justify-between gap-4 mr-6">
              <li className="border p-2">
                <a href="/login">Sign In</a>
              </li>
              <li className="border p-2">
                <a href="/register">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg-gray-200 auto-w auto-h pt-3 p-5">
        <div className="flex justify-end mr-10 mt-3">
          <button>+</button>
        </div>
        <div className="flex flex-wrap gap-5 ml-5 mt-5 justify-center">
          <div className="border border-black bg-white p-2">
            Bugün hiçbir şey yemeğeceğim
          </div>
          <div className="border border-black bg-white p-2 w-12 h-">
            <img
              className="rounded-full"
              src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
              alt="Semih Yılmaz"
            />
          </div>
          <div className="border border-black bg-white p-2">STATUS</div>
          <div className="flex items-center gap-3">
            <div>düzeltme</div>
            <div>silme</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
