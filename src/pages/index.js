import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Stats from "@/components/Stats";
import Dashboard from "@/components/Dashboard";

function checkUserAuthentication(req) {
  // Check the request headers, cookies, etc. to see if the user is authenticated.
  // Return true if they are, false if they are not.
  return req.cookies.authenticated === 'true';
}

export async function getServerSideProps(context) {
  const isAuthenticated = checkUserAuthentication(context.req);

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  // If the user is authenticated, return the normal props.
  return { props: {} }
}

export default function index() {
  return (
    <>
      {/* <Sidebar /> */}
      <Stats />
      <Header />
      <Dashboard />
    </>
  );
}
