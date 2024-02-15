import React from "react";
import Link from "next/link";
import TitleCard from "@/components/TitleCard";

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

export default function SocialNetwork() {
  const socialNetworks = ["Facebook", "Twitter", "Instagram", "LinkedIn"];

  return (
    <div className="flex items-center justify-center min-h-screen pl-[6rem] w-fit">
      <div className="container">
        <TitleCard title="Social Networks">
          <ul className="space-y-3">
            {socialNetworks.map((network, index) => (
              <li key={index} className="rounded shadow-xl p-4 w-52">
                {network}
              </li>
            ))}
          </ul>
        </TitleCard>
      </div>
    </div>
  );
}
