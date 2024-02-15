import { useState } from 'react';

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

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col w-full p-8 space-y-4 items-center bg-white dark:bg-white-400 sm:w-96 sm:px-10 sm:py-16 rounded-xl shadow-lg z-10">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-black">Contact Us</h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <input className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" name="name" placeholder="Name" onChange={handleInputChange} />
          <input className="w-full px-4 py-2 mt-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600" type="email" name="email" placeholder="Email" onChange={handleInputChange} />
          <textarea className="w-full px-4 py-2 mt-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600" name="message" placeholder="Message" onChange={handleInputChange} />
          <button className="w-full px-4 py-2 mt-2 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}