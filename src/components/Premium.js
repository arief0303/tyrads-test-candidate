import Link from "next/link";
import React from "react";

const Premium = () => {
  return (
    <div className="card bg-base-100 shadow-xl w-auto">
      <article className="prose prose-xs">
        <h3 className="text-center p-4">Go Premium</h3>
      </article>
      <figure className="px-10">
        <img
          src="https://cdn.britannica.com/65/12565-050-B102B3A8/crown-Denmark-helmet-form-enamel-gold-stones-1670.jpg"
          alt="Crown"
          className="rounded-xl"
        />
      </figure>
      {/* <div className="card-body items-center text-center p-0">
        <svg
          width="100px"
          height="100px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 8L4.44293 16.6576C4.76439 18.5863 6.43315 20 8.38851 20H15.6115C17.5668 20 19.2356 18.5863 19.5571 16.6576L21 8M3 8L6.75598 11.0731C7.68373 11.8321 9.06623 11.6102 9.70978 10.5989L12 7M3 8C3.82843 8 4.5 7.32843 4.5 6.5C4.5 5.67157 3.82843 5 3 5C2.17157 5 1.5 5.67157 1.5 6.5C1.5 7.32843 2.17157 8 3 8ZM21 8L17.244 11.0731C16.3163 11.8321 14.9338 11.6102 14.2902 10.5989L12 7M21 8C21.8284 8 22.5 7.32843 22.5 6.5C22.5 5.67157 21.8284 5 21 5C20.1716 5 19.5 5.67157 19.5 6.5C19.5 7.32843 20.1716 8 21 8ZM12 7C12.8284 7 13.5 6.32843 13.5 5.5C13.5 4.67157 12.8284 4 12 4C11.1716 4 10.5 4.67157 10.5 5.5C10.5 6.32843 11.1716 7 12 7Z"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div> */}
      <div className="card-body items-center text-center">
        <h2 className="card-title">Need more features?</h2>
        <p>Update your account to premium to get more features.</p>
        <div className="card-actions">
          <Link href="/pricing">
            <button className="btn btn-primary w-52">Get It Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Premium;
