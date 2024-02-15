import React from "react";

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
  return (
    <div className="bye" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <article className="prose lg:prose-xl">
        <h1 className="pl-[6rem]">Bye bye! 😊</h1>
      </article>
    </div>
  );
};

export default logout;
