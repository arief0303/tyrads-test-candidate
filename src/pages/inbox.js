import Link from "next/link";
import { useState } from "react";

export default function Inbox() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "John Doe", subject: "Hello", content: "Hello, how are you?" },
    { id: 2, sender: "Jane Doe", subject: "Meeting", content: "Let's have a meeting tomorrow." },
    // Add more messages as needed
  ]);

  return (
    <div className="flex items-center justify-center min-h-screen pl-[6rem]">
      <div className="container">
        <h1 className="text-4xl mb-4">Inbox</h1>
        <ul className="space-y-2">
          {messages.map((message) => (
            <li key={message.id} className="bg-white rounded shadow p-4 w-52">
              <h2 className="font-bold">{message.sender}</h2>
              <h3 className="text-blue-500">{message.subject}</h3>
              <p>{message.content}</p>
            </li>
          ))}
        </ul>
        <Link href="/" className="mt-4 inline-block bg-primary text-white rounded px-4 py-2">
          Go back
        </Link>
      </div>
    </div>
  );
}