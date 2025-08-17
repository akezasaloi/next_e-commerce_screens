import Link from "next/link";
import { MdSend } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
     
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Exclusive</h3>
            <h4 className="text-lg">Subscribe</h4>
            <p className="text-gray-300 text-sm">Get 10% off your first order</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black border border-gray-600 px-4 py-2 pr-10 rounded text-sm w-full focus:outline-none focus:border-white"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <MdSend className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>


          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Account</h3>
            <div className="space-y-2 text-sm">
              <Link href="/account" className="block text-gray-300 hover:text-white">My Account</Link>
              <Link href="/login" className="block text-gray-300 hover:text-white">Login / Register</Link>
              <Link href="/cart" className="block text-gray-300 hover:text-white">Cart</Link>
              <Link href="/wishlist" className="block text-gray-300 hover:text-white">Wishlist</Link>
              <Link href="/shop" className="block text-gray-300 hover:text-white">Shop</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Link</h3>
            <div className="space-y-2 text-sm">
              <Link href="/privacy-policy" className="block text-gray-300 hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="block text-gray-300 hover:text-white">Terms Of Use</Link>
              <Link href="/faq" className="block text-gray-300 hover:text-white">FAQ</Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white">Contact</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Download App</h3>
            <p className="text-gray-300 text-xs">Save $3 with App New User Only</p>
            <div className="grid grid-cols-2 gap-2">
              <img src="/images/qr-code.png" alt="QR Code" className="w-20 h-20" />
              <div className="space-y-2">
                <img src="/images/google-play-badge.png" alt="Google Play" className="w-24 h-8" />
                <img src="/images/app-store-badge.png" alt="App Store" className="w-24 h-8" />
              </div>
            </div>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-white hover:text-gray-300">
                <FaFacebookF className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <FaTwitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <FaLinkedinIn className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
          <p className="text-gray-500 text-sm">@Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;