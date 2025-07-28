import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AuthForm({ type }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const role = email === "admin@hellstore.com" ? "admin" : "customer";
    console.log(`${type} attempt with:`, { email, password });
    try {
      const endpoint =
        type === "login"
          ? "http://localhost:5000/api/auth/login"
          : "http://localhost:5000/api/auth/register";

      const res = await axios.post(endpoint, { email, password });

      console.log(`${type} success with:`, res.data);

      if (type === "login") {
        // Save token and role
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);

        // Route based on role
        if (res.data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/shop");
        }
      } else {
        // After registration, go to login
        navigate("/");
      }
    } catch (err) {
      console.error("FULL ERROR:", err);
      alert(err.response?.data?.msg || "Something went wrong, bro.");
    }
    // Later: Hook this to backend API
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-900 text-white'>
      <div className='bg-gray-800 p-8 rounded-lg shadow-lg w-96'>
        <h2 className='text-2xl font-bold mb-6 text-center text-blue-400 animate-pulse'>
          {type === "login"
            ? "Sign In to Shop 🔐"
            : "Register for Hellstore 👻"}
        </h2>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            type='email'
            placeholder='Email'
            className='w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type='password'
            placeholder='Password'
            className='w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type='submit'
            className='w-full bg-blue-600 hover:bg-blue-700 transition-colors py-2 rounded font-bold'
          >
            {type === "login" ? "Login" : "Register"}
          </button>
        </form>

        <p className='mt-4 text-sm text-center text-gray-400'>
          {type === "login" ? (
            <>
              Don't have an account?{" "}
              <Link to='/register' className='text-blue-400 hover:underline'>
                Register
              </Link>
            </>
          ) : (
            <>
              Already registered?{" "}
              <Link to='/' className='text-blue-400 hover:underline'>
                Login
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
