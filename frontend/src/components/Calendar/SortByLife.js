import React, { useState } from "react";

function SortByLife({ tabHandler }) {
  const [isOpen, setIsOpen] = useState(1);

  const [currStatus, setCurrStatus] = useState("all");

  const toggleMenu = (num) => {
    setIsOpen(num);
    if (num === 1) tabHandler("all");
    else if (num === 2) tabHandler("live");
    else if (num === 3) tabHandler("upcoming");
    else if (num === 4) tabHandler("completed");
  };

  return (
    <>
      <div>
        <div className="sm:hidden">
          <label htmlFor="Tab" className="sr-only">
            Tab
          </label>

          <select
            id="Tab"
            className="w-full h-10 font-medium text-gray-700 rounded-md border-gray-200"
          >
            <option>All</option>
            <option>Live</option>
            <option>Upcoming</option>
            <option select>Completed</option>
          </select>
        </div>

        <div className="hidden sm:block">
          <nav className="flex gap-6" aria-label="Tabs">
            <a
              onClick={() => toggleMenu(1)}
              href="#"
              className={`min-w-24 text-center no-underline shrink-0 rounded-lg p-2 text-lg font-medium text-gray-500 transition duration-300 ease-out  + ${
                isOpen === 1
                  ? "bg-blue-100 text-blue-600 "
                  : "hover:bg-gray-50 hover:text-gray-700"
              }`}
            >
              All
            </a>

            <a
              onClick={() => toggleMenu(2)}
              href="#"
              className={`min-w-24 text-center no-underline shrink-0 rounded-lg p-2 text-lg font-medium text-gray-500 transition duration-300 ease-out + ${
                isOpen === 2
                  ? "bg-red-100 text-red-600 "
                  : "hover:bg-gray-50 hover:text-gray-700"
              }`}
            >
              Live
            </a>

            <a
              href="#"
              onClick={() => toggleMenu(3)}
              className={`min-w-24 text-center no-underline shrink-0 rounded-lg p-2 text-lg font-medium text-gray-500 transition duration-300 ease-out + ${
                isOpen === 3
                  ? "bg-orange-100 text-orange-600 "
                  : "hover:bg-gray-50 hover:text-gray-700"
              }`}
            >
              Upcoming
            </a>

            <a
              onClick={() => toggleMenu(4)}
              href="#"
              className={`min-w-24 text-center no-underline shrink-0 rounded-lg p-2 text-lg font-medium text-gray-500 transition duration-300 ease-out + ${
                isOpen === 4
                  ? "bg-sky-100 text-sky-600 "
                  : "hover:bg-gray-50 hover:text-gray-700"
              }`}
              aria-current="page"
            >
              Completed
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default SortByLife;
