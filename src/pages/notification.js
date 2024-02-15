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

const Notification = () => {
  const notifications = [
    { id: 1, text: 'Notification 1' },
    { id: 2, text: 'Notification 2' },
    { id: 3, text: 'Notification 3' },
    // Add more notifications as needed
  ];

  return (
    <>
      <div className="flex items-center justify-center min-h-screen pl-[6rem] w-fit">
        <div className="container">
          <TitleCard title="Notifications">
            <ul className="space-y-3">
              {notifications.map(notification => (
                <li key={notification.id} className="bg-white rounded shadow-xl p-4 w-52">
                  {notification.text}
                </li>
              ))}
            </ul>
          </TitleCard>
        </div>
      </div>
    </>
  );
};

export default Notification;
