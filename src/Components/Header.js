import React from "react";
import logo from "../Assets/TF logo.svg";
import metric from "../Assets/metrics.png";
import list from "../Assets/list.png";
import { Link } from "react-router-dom";
import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
  TERipple,
} from "tw-elements-react";
const Header = () => {
  return (
    <div className="border border-solid border-blue-200 mt-px">
      {/* implement logic for underling toggle */}
      <div className="py-2 inline-flex justify-between">
        <img className="px-2" alt="logo" src={logo} />
        <div className="flex items-center mx-2">
          <img className="h-4 mr-1" alt="metric" src={metric} />
          <Link to="/">
            <p className="text-sm font-bold">Metrics</p>
          </Link>
        </div>
        <div className="flex items-center">
          <img className="h-3 mr-1" alt="list" src={list} />
          <Link to="/logs">
            <p className="text-sm font-bold">Logs</p>
          </Link>
        </div>
        {/* impement logic for dropdown */}
        {/* <TEDropdown className="flex ml-20">
          <TERipple rippleColor="light">
            <TEDropdownToggle
              tag="a"
              className="flex items-center whitespace-nowrap pointer-events-auto cursor-pointer rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Previous 5 minutes
              <span className="ml-2 [&>svg]:w-5 w-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </TEDropdownToggle>
          </TERipple>

          <TEDropdownMenu>
            <TEDropdownItem>
              <a
                href="#"
                className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-black hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
              >
                Last 15 minutes
              </a>
            </TEDropdownItem>
            <TEDropdownItem>
              <a
                href="#"
                className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-black hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
              >
                Last 30 minutes
              </a>
            </TEDropdownItem>
            <TEDropdownItem>
              <a
                href="#"
                className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-black hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
              >
                Last 1 Hour
              </a>
            </TEDropdownItem>
            <TEDropdownItem>
              <a
                href="#"
                className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-black hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
              >
                Last 3 Hour
              </a>
            </TEDropdownItem>
            <TEDropdownItem>
              <a
                href="#"
                className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-back hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
              >
                Last 6 Hour
              </a>
            </TEDropdownItem>
          </TEDropdownMenu>
        </TEDropdown> */}
        {/* implementation ended */}
      </div>
    </div>
  );
};

export default Header;
