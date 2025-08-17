"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "../shared-components/Header";
import Footer from "../shared-components/Footer";

export default function SignUp() {
  const router = useRouter();

  // Handle create account and redirect to login
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      {/* Main content fills the screen, side by side, no margin */}
      <div className="flex flex-1 w-full">
        {/* Image Side */}
        <div className="w-1/2 flex items-stretch bg-[#E3F0FF]">
          <div className="flex items-center justify-center w-full">
            <Image
              src="/images/signup.png"
              alt="Shopping cart with phone and packages"
              width={500}
              height={400}
              className="w-full h-auto "
              priority
            />
          </div>
        </div>
        {/* Sign Up Side */}
        <div className="w-1/2 flex items-center justify-center bg-white">
          <div className="w-full max-w-md p-8">
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">Create an account</h1>
              <p className="text-gray-600">Enter your details below</p>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none text-gray-900 placeholder-gray-500"
                  autoComplete="name"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none text-gray-900 placeholder-gray-500"
                  autoComplete="email"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none text-gray-900 placeholder-gray-500"
                  autoComplete="new-password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded transition-colors font-semibold text-base mt-4"
              >
                Create Account
              </button>
              <button
                type="button"
                className="w-full border border-gray-300 flex items-center justify-center py-3 rounded mt-2 hover:bg-gray-50 transition"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 48 48">
                  <g>
                    <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.2 33.3 29.7 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.7 0 5.2 0.9 7.2 2.5l6.4-6.4C34.6 5.2 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-8.1 20-21 0-1.3-0.1-2.7-0.5-4z"/>
                    <path fill="#34A853" d="M6.3 14.7l7 5.1C15.4 16.1 19.4 13 24 13c2.7 0 5.2 0.9 7.2 2.5l6.4-6.4C34.6 5.2 29.6 3 24 3c-7.4 0-13.7 4-17.7 10.1z"/>
                    <path fill="#FBBC05" d="M24 45c5.4 0 10.4-1.8 14.2-4.8l-6.6-5.4c-2.1 1.4-4.7 2.2-7.6 2.2-5.6 0-10.3-3.8-12-8.9l-7 5.4C6.2 41.8 14.4 45 24 45z"/>
                    <path fill="#EA4335" d="M44.5 20H24v8.5h11.7C34.8 33.3 29.8 36 24 36c-5.6 0-10.3-3.8-12-8.9l-7 5.4C6.2 41.8 14.4 45 24 45c10.5 0 20-8.1 20-21 0-1.3-0.1-2.7-0.5-4z"/>
                  </g>
                </svg>
                Sign up with Google
              </button>
            </form>
            <div className="text-center mt-4">
              <span className="text-gray-600">Already have account?</span>
              <Link href="/login" className="text-black font-semibold hover:underline ml-1">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}