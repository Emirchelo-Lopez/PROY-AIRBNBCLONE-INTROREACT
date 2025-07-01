import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";

function SignUp() {
  // 1. Create state variables for 'email' and 'password'.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 2. Create the handleSubmit function.
  const handleSubmit = (event) => {
    // a. Prevent the default form submission which reloads the page.
    // Your code here
    event.preventDefault();

    // b. Perform a basic validation (e.g., check if email is not empty).
    console.log("Signing in with:", { email, password });

    if (!name || !email || !password) {
      alert("Please fill out all fields");
      return;
    }

    console.log("Signing up with:", { name, email });

    // c. Call the login() function from auth.js, passing an object like { email: email }.
    // Your code here
    login({ name: name, email: email });

    // d. Navigate the user to the home page ('/').
    // Your code here
    navigate("/");

    // A better user experience is to force the whole app to re-check
    // the auth status. Navigating and then reloading does this simply.
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {/* 3. The form's onSubmit should call your handleSubmit function. */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Create an Account
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-red-500"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            // a. The input's value should be tied to the 'email' state.
            value={email}
            // b. The onChange handler should update the 'email' state.
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-red-500"
            placeholder="example@email.com"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            // c. The input's value should be tied to the 'password' state.
            value={password}
            // d. The onChange handler should update the 'password' state.
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-red-500"
            placeholder="********"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
