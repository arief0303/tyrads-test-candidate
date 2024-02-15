import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

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

const logout = () => {
  const router = useRouter();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(seconds => seconds > 0 ? seconds - 1 : 0);
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
      Cookies.remove('authenticated');
      router.push('/login');
    }, 5000);
  }, []);

  return (
    <div className="bye" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <article className="prose lg:prose-xl">
        <h1 className="pl-[6rem]">Bye bye! 😊</h1>
        <p className="pl-[6rem]">You will logout in {seconds} seconds</p>
      </article>
    </div>
  );
};

export default logout;