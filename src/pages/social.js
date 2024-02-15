import Link from "next/link";

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

export default function SocialNetwork() {
  const socialNetworks = ["Facebook", "Twitter", "Instagram", "LinkedIn"];

  return (
    <div className="flex items-center justify-center min-h-screen pl-[6rem]">
      <div className="container">
        <h1 className="text-4xl mb-4">Social Networks</h1>
        <ul className="space-y-2">
          {socialNetworks.map((network, index) => (
            <li key={index} className="bg-white rounded shadow p-4 w-52">
              {network}
            </li>
          ))}
        </ul>
        <Link
          href="/"
          className="mt-4 inline-block bg-primary text-white rounded px-4 py-2"
        >
          Go back
        </Link>
      </div>
    </div>
  );
}
