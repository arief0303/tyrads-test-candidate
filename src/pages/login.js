import React from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();

  const handleSignIn = async () => {
    // Here you would typically send a request to your server to authenticate the user.
    // If the authentication is successful, you would set a cookie or a token in the local storage.
    // For this example, let's just set the cookie directly:

    Cookies.set("authenticated", "true");

    // Then redirect the user to the home page.
    router.push("/");
  };

  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary shadow-xl transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-xl sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <img src="https://tyrads.com/wp-content/uploads/2022/07/Logo-1-e1682960338366.png" className="h-7 sm:h-8" />
              <p>Candidate test project by Arief R. Syauqie</p>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autocomplete="off"
                    id="email"
                    name="email"
                    type="text"
                    required
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 focus:ring-0"
                  />
                  <label
                    for="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm leading-7 px-2 bg-white peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-rose-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    autocomplete="off"
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 focus:ring-0"
                  />
                  <label
                    for="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm leading-7 px-2 bg-white peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-rose-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <button
                  onClick={handleSignIn}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Sign in
                </button>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>
                  Don't have an account?
                  <a href="#" className="text-primary hover:text-secondary">
                    {" "}
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
