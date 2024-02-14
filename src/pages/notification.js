import React from 'react';
import Link from 'next/link';

const Notification = () => (
  <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
        <div className="max-w-md mx-auto">
          <div className="flex items-center space-x-5">
            <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
              <h2 className="leading-relaxed">Notifications</h2>
              <p className="text-sm text-gray-500 font-normal leading-relaxed">You have 3 new notifications.</p>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <p>Notification 1</p>
              <p>Notification 2</p>
              <p>Notification 3</p>
            </div>
            <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
              <p>
                  <Link href="/" className="text-blue-600 hover:text-blue-800" >Go back to Home.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Notification;