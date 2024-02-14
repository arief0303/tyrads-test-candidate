// pages/404.js
import Link from "next/link";

export default function Custom404() {
  return (
    <div>
      <div
        className="bye"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <article className="prose lg:prose-xl">
          <h1 className="pl-[6rem]">404 - Page Not Found 😔</h1>
          <Link href="/" className="text-primary hover:text-blue-800" >Go back to Home.</Link>

        </article>
      </div>
    </div>
  );
}
