import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectPosition() {
  return (
    <Menu as="div" className="relative inline-block -mt-1 text-left w-[328px]">
      <Menu.Button className="uppercase inline-flex items-center w-full justify-between gap-x-1.5 bg-[#070811] text-white  px-6 py-2 text-[20px] font-bold shadow-sm hover:bg-[#202340] hover:text-[#FFA801]">
        Full-Time
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right divide-y divide-[#070811] bg-[#070811] shadow-lg focus:outline-none text-[16px] font-bold">
          <Menu.Item>
            {({ active }) => (
              <Link
                href="#"
                className={classNames(
                  active ? "bg-[#202340] text-[#FFA801]" : "",
                  "px-4 py-2 text-sm text-white flex items-center gap-2"
                )}
              >
                Part-Time
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                href="#"
                className={classNames(
                  active ? "bg-[#202340] text-[#FFA801]" : "",
                  "px-4 py-2 text-sm text-white flex items-center gap-2"
                )}
              >
                Contract
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
