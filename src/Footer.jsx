import { useState } from "react";

const Footer = () => {
  const [Email,setEmail] = useState("");

  const handleEmailButton = () => {
    alert('Email was Succesfully Submited');
  }
  return (
    <footer className="flex justify-center items-center">
        <div className="flex flex-row gap-40 mt-20 mb-6">
          <div>
            <h1 className="font-bold text-2xl text-gray-800">App Name</h1>
            <p>Social Media App</p>
          </div>

          <div>
            <h1 className="font-bold text-2xl text-gray-800">Nav Links</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>New page</li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold text-2xl text-gray-800">Email Address</h1>
          <form onSubmit={handleEmailButton}>
            <input className="border-2 border-s-gray-700 p-3 rounded-md outline-none shadow-2xl" type="email" value={Email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email address" />
            <button className="text-gray-700 border-2 border-s-gray-900 rounded-lg p-3 shadow-2xl" type="Submit">Submit Email</button>
          </form>
          </div>
        </div>
    </footer>
  )
}

export default Footer