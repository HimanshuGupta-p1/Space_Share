import React, {useState} from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { BsFolderPlus } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { FaBoxArchive } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Checkbox } from "@material-tailwind/react";
    

const Manage_Folder = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    const notificationCount = 3;
  return (
    <div className="justify-center">
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-52">
      <button className="btn btn-primary w-50 mx-9 text-white bg-blue-700 hover:bg-blue-800">
        + Upload files
      </button>
      <div className="relative ml-12 mt-1">
      <div className="ml-72">
      <button className="relative flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full focus:outline-none ml-96">
      {/* Notification Bell Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>

      {/* Notification Count Indicator */}
      {notificationCount > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs font-semibold rounded-full -mt-1 -mr-1">
          {notificationCount}
        </span>
      )}
    </button>
    </div>
    </div>

      <div className="relative ml-52">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://via.placeholder.com/150"
            alt="Avatar"
          />
        </div>
        <button
          onClick={toggleDropdown}
          className="ml-4 p-2 bg-gray-200 rounded-full focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
      </div>

      <div className="text-4xl mx-9 my-9 text-black">ALL FILES</div>
      
      
      <form class="max-w-md mx-9 -my-7">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-blck"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
    
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black-50 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="w-fit px-6 py-4 mt-8 mx-9 overflow-hidden blue-glassmorphism shadow-md sm:max-w sm:rounded-lg grid gap-96 grid-cols-3 sm:grid-cols-3">
        <form className="">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white undefined absolute py-1 px-1 mt-1"
            >
              All files / New folder / New folder 1
            </label>
          </div>
        </form>

        <div className="ml-16">
            <div className="-ml-0">
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mx-96">
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download</span>
          </button>
          </div>
        </div>
        <div className=" -mr-20">
        <div className="grid grid-cols-5 sm:grid-cols-5">
          <div className=" w-9 h-9 white-glassmorphism px-2 py-2 mt-0 mx-2 overflow-hidden shadow-md sm:max-w-md sm:rounded-lg -ml-0">
            <BsBoxArrowUpRight />
          </div>
          <div className="w-9 h-9 white-glassmorphism px-2 py-2 mt-0 mx-2 overflow-hidden shadow-md sm:max-w-md sm:rounded-lg -ml-4">
            <BsFolderPlus />
          </div>
          <div className="w-9 h-9 white-glassmorphism px-2 py-2 mt-0 mx-2 overflow-hidden shadow-md sm:max-w-md sm:rounded-lg -ml-8">
            <MdContentCopy />
          </div>
          <div className="w-9 h-9 white-glassmorphism px-2 py-2 mt-0 mx-2 overflow-hidden shadow-md sm:max-w-md sm:rounded-lg -ml-12">
            <FaBoxArchive />
          </div>
          <div className="w-9 h-9 white-glassmorphism px-2 py-2 mt-0 mx-2 overflow-hidden shadow-md sm:max-w-md sm:rounded-lg -ml-16">
            <MdDelete />
          </div>
        </div>
        </div>
      </div>
      <div className="w-fit px-6 py-4 mt-3 mx-9 overflow-hidden blue-glassmorphism shadow-md sm:max-w sm:rounded-lg grid grid-cols-6 sm:grid-cols-6">
        <div className="flex w-max">
          <Checkbox color="blue" defaultChecked />
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-2 gap-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>

            <h1 className="text-slate-300 -ml-3">Name</h1>
          </div>
          <div className="mt-3 ml-60">
            <h1 className="text-slate-300">Type</h1>
          </div>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-2 gap-0 ml-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
            <h1 className="text-slate-300 -ml-3">Owner</h1>
          </div>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-2 gap-0 ml-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
            <h1 className="text-slate-300 -ml-1.5">Date</h1>
          </div>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-2 gap-0 ml-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
            <h1 className="text-slate-300 -ml-1">Size</h1>
          </div>
        </div>
      </div>
      <div className="w-fit px-6 py-4 mt-3 mx-9 overflow-hidden blue-glassmorphism shadow-md sm:max-w sm:rounded-lg grid grid-cols-6 sm:grid-cols-6">
      <div className="flex w-max">
          <Checkbox color="blue" defaultChecked />
        
          <div className="mt-3">
            <h1 className="text-slate-300">Storage1</h1>
          </div>
          <div className="mt-3 ml-60">
            <h1 className="text-slate-300">Folder</h1>
          </div>
          <div className="mt-3 ml-60">
            <h1 className="text-slate-300">me, John Doe</h1>
          </div>
          <div className="mt-3 ml-52">
            <h1 className="text-slate-300">Yesterday, 12:47</h1>
          </div>
          <div className="mt-3 ml-44">
            <h1 className="text-slate-300">3.57 mb</h1>
          </div>
          </div>
      </div>
      <div className="w-fit px-6 py-4 mt-3 mx-9 overflow-hidden blue-glassmorphism shadow-md sm:max-w sm:rounded-lg grid grid-cols-6 sm:grid-cols-6">
      <div className="flex w-max">
          <Checkbox color="blue" defaultChecked />
        
          <div className="mt-3">
            <h1 className="text-slate-300">Storage2</h1>
          </div>
          <div className="mt-3 ml-60">
            <h1 className="text-slate-300">Folder</h1>
          </div>
          <div className="mt-3 ml-60">
            <h1 className="text-slate-300">me</h1>
          </div>
          <div className="mt-3 ml-72">
            <h1 className="text-slate-300">15/03/2024, 13:50</h1>
          </div>
          <div className="mt-3 ml-44">
            <h1 className="text-slate-300">11.50 mb</h1>
          </div>
          </div>
      </div>
      <div className="w-fit px-6 py-4 mt-3 mx-9 overflow-hidden blue-glassmorphism shadow-md sm:max-w sm:rounded-lg grid grid-cols-6 sm:grid-cols-6">
      <div className="flex w-max">
          <Checkbox color="blue" defaultChecked />
        
          <div className="mt-3">
            <h1 className="text-slate-300">Storage3</h1>
          </div>
          <div className="mt-3 ml-60">
            <h1 className="text-slate-300">Folder</h1>
          </div>
          <div className="mt-3 ml-60">
            <h1 className="text-slate-300">me</h1>
          </div>
          <div className="mt-3 ml-72">
            <h1 className="text-slate-300">11/03/2024, 11:36</h1>
          </div>
          <div className="mt-3 ml-44">
            <h1 className="text-slate-300">5.43 mb</h1>
          </div>
          </div>
      </div>
      <div className="w-fit px-6 py-4 mt-3 mx-9 overflow-hidden blue-glassmorphism shadow-md sm:max-w sm:rounded-lg grid grid-cols-6 sm:grid-cols-6">
      <div className="flex w-max">
          <Checkbox color="blue" defaultChecked />
        
          <div className="mt-3">
            <h1 className="text-slate-300">Storage4</h1>
          </div>
          <div className="mt-3 ml-60">
            <h1 className="text-slate-300">Folder</h1>
          </div>
          <div className="mt-3 ml-60">
            <h1 className="text-slate-300">me, Peter Tomson</h1>
          </div>
          <div className="mt-3 ml-40">
            <h1 className="text-slate-300">10/02/2024, 15:30</h1>
          </div>
          <div className="mt-3 ml-44">
            <h1 className="text-slate-300">20.56 mb</h1>
          </div>
          </div>
      </div>
      <div className="w-fit px-6 py-4 mt-3 mx-9 overflow-hidden blue-glassmorphism shadow-md sm:max-w sm:rounded-lg grid grid-cols-6 sm:grid-cols-6">
      <div className="flex w-max">
          <Checkbox color="blue" defaultChecked />
        
          <div className="mt-3">
            <h1 className="text-slate-300">Storage5</h1>
          </div>
          <div className="mt-3 ml-60">
            <h1 className="text-slate-300">Folder</h1>
          </div>
          <div className="mt-3 ml-60">
            <h1 className="text-slate-300">John Doe</h1>
          </div>
          <div className="mt-3 ml-60">
            <h1 className="text-slate-300">24/01/2024, 20:38</h1>
          </div>
          <div className="mt-3 ml-40">
            <h1 className="text-slate-300">26.40 mb</h1>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Manage_Folder;