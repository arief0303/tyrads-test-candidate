// pages/settings.js

import { useRouter } from 'next/router'

export default function Settings() {
  const router = useRouter()

  const handleSave = () => {
    // Perform save operation here
    // After saving, redirect to home page
    router.push('/')
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen pl-[6rem]">
      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
      <div className="bg-white p-4 rounded shadow">
        <label className="block mb-2">Username</label>
        <input type="text" className="mb-4 input input-bordered" placeholder="Enter your username" />
        <label className="block mb-2">Email</label>
        <input type="email" className="mb-4 input input-bordered" placeholder="Enter your email" />
        <button onClick={handleSave} className="btn btn-primary">Save</button>
      </div>
    </div>
  )
}