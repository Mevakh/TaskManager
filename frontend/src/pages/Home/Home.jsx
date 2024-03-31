import { React, useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  return (
    <div>
      <nav class="border-gray-200 dark:bg-gray-900 dark:border-gray-700 border-b-2">
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
          <a>
            <span className="text-2xl">Task Manager</span>
          </a>
          <div className="">
            <ul className="flex flex-wrap justify-between gap-4 mr-6">
              <li className="border p-2">
                <a href="">Sign In</a>
              </li>
              <li className="border p-2">
                <a href="">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <div className="flex">
         <h1>Task</h1>
         <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
