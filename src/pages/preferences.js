import { useState, useEffect } from "react";
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

export default function Preferences() {
  const [preference, setPreference] = useState({
    notifications: true,
    darkMode: false,
  });

  const handleInputChange = (event) => {
    /* setPreference({
      ...preference,
      [event.target.name]: event.target.checked,
    }); */
    alert("This feature is not available yet.");
    return;
  };

  useEffect(() => {
    if (preference.darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [preference.darkMode]);

  return (
    <div className="flex items-center justify-center min-h-screen pl-[6rem] w-fit">
      <div className="container">
        <TitleCard title="Preferences">
          <p className="text-gray-500 mb-10">
            Set your preferences for the application.
          </p>
          <div className="space-y-4">
            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="notifications"
                  className="form-checkbox h-5 w-5 text-primary"
                />
                <span className="text-gray-900 font-medium">
                  Enable Notifications
                </span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="darkMode"
                  checked={preference.darkMode}
                  onChange={handleInputChange}
                  className="form-checkbox h-5 w-5 text-primary"
                />
                <span className="text-gray-900 font-medium">
                  Enable Dark Mode
                </span>
              </label>
            </div>
          </div>
        </TitleCard>
      </div>
    </div>
  );
}
