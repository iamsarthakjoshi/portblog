import React from 'react';

export default function Button({ type, style = 'outline' }) {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full mx-auto py-16">
        {/* <!-- Outline --> */}
        <div className="bg-white px-6 py-4 my-3 w-3/4 mx-auto shadow rounded-md flex items-center">
          <div className="w-full text-center mx-auto">
            <button
              type="button"
              className="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
              Primary
            </button>
            <button
              type="button"
              className="border border-green-500 text-green-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline"
            >
              Success
            </button>
            <button
              type="button"
              className="border border-red-500 text-red-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline"
            >
              Error
            </button>
            <button
              type="button"
              className="border border-yellow-500 text-yellow-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
            >
              Warning
            </button>
            <button
              type="button"
              className="border border-teal-500 text-teal-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-teal-600 focus:outline-none focus:shadow-outline"
            >
              Info
            </button>
            <button
              type="button"
              className="border border-gray-700 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            >
              Dark
            </button>
            <button
              type="button"
              className="border border-gray-300 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
            >
              Light
            </button>
          </div>
        </div>
        {/* <!-- End Outline --> */}
      </div>
    </div>
  );
}
