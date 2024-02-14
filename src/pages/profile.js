// pages/profile.js
import React from "react";

const Profile = () => (
  <div>
    <div className="overflow-y">
      {/* <div className="Dashboard w-screen pl-[6rem] pr-[23rem] overflow-auto"></div> */}
      <div className="Dashboard w-screen pl-[6rem] overflow-auto h-screen">
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white rounded-lg shadow-lg w-1/3">
            <div className="flex justify-center items-center p-6">
              <img
                className="h-24 w-24 rounded-full"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Profile"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Samantha Davis</div>
              <p className="text-gray-700 text-base">
                Samantha Davis is a software developer specializing in front-end
                development.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #frontend
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #react
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tailwind
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
