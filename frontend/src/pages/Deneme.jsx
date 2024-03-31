import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Deneme = () => {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/tasks")
      .then((response) => setTask(response.data))
      .catch((error) => console.error(error));
  }, [tasks]);

  const logo =
    "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=826&t=st=1704389437~exp=1704390037~hmac=b665dcfa99c1eddeb49d25c1c0f172f85687e4fcab92d53611867d0e1ba64601";
  return (
    <div className="h-screen flex">
      {/* <div className="w-64 px-8 py-4 border-r">
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
      </div> */}
      {tasks.map((task) => (
        <div className="flex-1 min-w-0">
          <div className="min-h-screen bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12">
            <div className="max-w-7xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <div className="space-y-2">
                    <ul>
                      <li key={task._id}>
                        <p class="text-slate-800">{task.description}</p>
                        <div>
                          <h3>{task.status}</h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
{
  /* <p class="text-slate-800">
                    Learn how to make a glowing gradient background!
                  </p> */
}

export default Deneme;
