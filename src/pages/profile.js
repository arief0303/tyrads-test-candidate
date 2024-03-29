// pages/profile.js
import React from "react";
import Link from "next/link";

function checkUserAuthentication(req) {
  // Check the request headers, cookies, etc. to see if the user is authenticated.
  // Return true if they are, false if they are not.
  return req.cookies.authenticated === "true";
}

export async function getServerSideProps(context) {
  const isAuthenticated = checkUserAuthentication(context.req);

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // If the user is authenticated, return the normal props.
  return { props: {} };
}

const Profile = () => (
  <div>
    <div className="overflow-y">
      {/* <div className="Dashboard w-screen pl-[6rem] pr-[23rem] overflow-auto"></div> */}
      <div className="w-screen pl-[6rem] overflow-auto h-screen">
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white rounded-lg shadow-2xl w-1/3">
            <div className="flex justify-center items-center p-6">
              <img
                className="h-24 w-24 rounded-full"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Profile"
              />
            </div>
            <div className="divider m-0 px-6" />
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
            <div className="flex justify-center items-center">
              <Link href={"account-settings"} className="px-6 pt-4 pb-8">
                <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded">
                  Account Settings
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
