"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "../shared-components/Header";
import Footer from "../shared-components/Footer";

export default function Login() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/homepage");
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 w-full">

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


        <div className="w-1/2 flex items-center justify-center bg-white">
          <div className="w-full max-w-md p-8">
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">Log in to Exclusive</h1>
              <p className="text-gray-600">Enter your details below</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-black focus:outline-none text-gray-900 placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-red-500 focus:outline-none text-gray-900 placeholder-gray-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between pt-4">
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded transition-colors"
                >
                  Log In
                </button>
                <Link href="#" className="text-red-500 hover:text-red-600 text-sm">
                  Forget Password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}