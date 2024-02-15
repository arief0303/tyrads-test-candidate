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
    <div className="min-h-screen w-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="px-20">
        <div className="relative bg-white shadow-xl rounded-3xl p-10 w-[451px]">
          <div className="flex items-center space-x-5">
            <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
              <article className="prose prose-sm">
                <h1>Schedule</h1>
                <Calendar onChange={onChange} value={value} />
              </article>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
