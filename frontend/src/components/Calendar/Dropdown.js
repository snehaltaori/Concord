import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown({ semesters, currentSemester, setCurrentSemester }) {
  console.log(semesters);

  return (
    <Menu as="div" className="relative inline-block  text-left ">
      <div>
        <Menu.Button className="inline-flex text-sm w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-1.5 font-semibold text-[#6b7280] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 border-0 min-w-20">
          {currentSemester ? currentSemester : "Options"}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {semesters.map((semester) => (
              <Menu.Item>
                {({ active }) => (
                  <div
                  onClick={() => setCurrentSemester(semester)}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-700 text-sm" : "text-gray-700 text-sm",
                      "block px-4 py-2 text-[1rem] no-underline"
                    )}
                  >
                    {semester}
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
