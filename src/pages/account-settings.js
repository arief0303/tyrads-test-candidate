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
    <div className="p-6min-h-screen pl-[6rem] py-10 pr-8">
      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
      <div className="bg-white p-4 rounded-box shadow-xl">
        <label className="block mb-2">Name</label>
        <input type="text" className="mb-4 input input-bordered w-10/12" placeholder="Samantha Davis" />
        <div className='inline pl-5'>
        <button onClick={handleSave} className="btn btn-primary">Save</button>
        </div>
        <label className="block mb-2">Email</label>
        <input type="email" className="mb-4 input input-bordered w-10/12" placeholder="samantha-davis@tyrads.com" />
        <div className='inline pl-5'>
        <button onClick={handleSave} className="btn btn-primary">Save</button>
        </div>
        <label className="block mb-2">Title</label>
        <input type="text" className="mb-4 input input-bordered w-10/12" placeholder="Front-End Developer" />
        <div className='inline pl-5'>
        <button onClick={handleSave} className="btn btn-primary">Save</button>
        </div>
        <label className="block mb-2">Place</label>
        <input type="text" className="mb-4 input input-bordered w-10/12" placeholder="Ukraine" />
        <div className='inline pl-5'>
        <button onClick={handleSave} className="btn btn-primary">Save</button>
        </div>
        <label className="block mb-2">About</label>
        <textarea className="mb-4 input input-bordered w-10/12 h-40" placeholder="Ambitious and dependable."></textarea>
        <div className='absolute inline pl-5'>
        <button onClick={handleSave} className="btn btn-primary">Save</button>
        </div>
        <div className="divider" ></div>
        <label className="block mb-2">Language</label>
        <input type="text" className="mb-4 input input-bordered w-10/12" placeholder="Indonesian, Russian, English" />
        <div className='inline pl-5'>
        <button onClick={handleSave} className="btn btn-primary">Save</button>
        <label className="block mb-2">Timezone</label>
        <input type="text" className="mb-4 input input-bordered w-10/12" placeholder="UTC(+7)" />
        <div className='inline pl-5'>
        <button onClick={handleSave} className="btn btn-primary">Save</button>
        <div className="mt-4"><button className="btn btn-primary" onClick={() => updateProfile()}>Update</button></div>
        </div>
        </div>
      </div>
    </div>
  )
}