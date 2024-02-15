import Link from "next/link";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

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

export default function Schedule() {
  const [value, onChange] = useState(new Date());

  return (
    //center div to screen horizontally and vertically
    <>
      <div className="flex items-center justify-center min-h-screen pl-[6rem]">
        <div className="container">
          <h1 className="text-4xl mb-4">Schedule</h1>
          <Calendar onChange={onChange} value={value} />
          <Link
            href="/"
            className="mt-4 inline-block bg-primary text-white rounded px-4 py-2"
          >
            Go back
          </Link>
        </div>
      </div>
    </>
  );
}
