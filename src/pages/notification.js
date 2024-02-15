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

const Notification = () => (
  <>
    <div className="flex items-center justify-center min-h-screen pl-[6rem]">
      <div className="container">
        <h1 className="text-4xl mb-4">Notifications</h1>
        <ul className="space-y-2">
          <li className="bg-white rounded shadow p-4 w-52">Notification 1</li>
          <li className="bg-white rounded shadow p-4 w-52">Notification 2</li>
          <li className="bg-white rounded shadow p-4 w-52">Notification 3</li>
        </ul>
      </div>
    </div>
  </>
);

export default Notification;
