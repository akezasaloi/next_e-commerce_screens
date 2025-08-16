import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const Footer = () => {
  return (
    <footer className={`${poppins.className} bg-black text-white py-15 w-100vw m1-auto`}>
      <div className="ml-30 w-70vw grid grid-cols-1 md:grid-cols-5 gap-3">
        <div className="space-y-3 border-gray-700 pr-4">
          <h3 className="font-bold text-lg">Exclusive</h3>
          <p className="font-semibold">Subscribe</p>
          <p className="text-sm">Get 10% off your first order</p>
          <form className="mt-5 ">
            <div className="flex border border-white rounded px-3 py-2 items-center w-60">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black text-white  realtive w-50 "
              />
              <button type="submit" aria-label="Submit email" className="ml-auto relative right-0" >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-horizontal-icon lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" /><path d="M6 12h16" /></svg>
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-4  border-gray-700 pr-4 text-m ">
          <h3 className="font-semibold text-white">Support</h3>
          <p>
            111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="space-y-4 border-gray-700 pr-4 text-m ">
          <h3 className="font-semibold">Account</h3>
          <ul className="space-y-2 cursor-pointer">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        <div className="space-y-4 border-gray-700 pr-4 text-m">
          <h3 className="font-semibold">Quick Link</h3>
          <ul className="space-y-2 cursor-pointer">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="space-y-4 text-m ">
          <h3 className="font-semibold">Download App</h3>
          <p className="text-[10px] mb-3">Save $3 with App New User Only</p>
          <div className="flex space-x-3 mb-3">
            <Image
              src="/images/qr-code.png"
              alt="QR code"
              width={112}
              height={112}
              className="w-28 h-28 object-contain border border-white"
            />
            <div className="flex flex-col justify-between gap-2">
              <a href="#" className="">
                <Image
                  src="/images/google-play-badge.png"
                  alt="Google Play Store"
                  width={160}
                  height={48}
                  className="w-40 object-contain"
                />
              </a>
              <a href="#" className="">
                <Image
                  src="/images/app-store-badge.png"
                  alt="Apple App Store"
                  width={160}
                  height={48}
                  className="w-40 object-contain"
                />
              </a>
            </div>
          </div>
          <div className="flex space-x-9 text-white text-lg mt-5">
            <a href="#" aria-label="Facebook" className="text-dec">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="space-x-3 text-center text-gray-500 pt-8 text-m border-t border-gray-700 mt-20">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
};

export default Footer;