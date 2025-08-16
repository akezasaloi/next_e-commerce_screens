"use client";
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';


const SignIn = () => {
 const [name, setName] = useState('');
 const [emailPhone, setEmailPhone] = useState('');
 const [password, setPassword] = useState('');


 const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault();
   console.log('Form submitted', { name, emailPhone, password }); // Debug log
   if (name.trim() && emailPhone.trim()) {
     window.location.href = '/signin';
   } else {
     alert('Please fill in both Name and Email/Phone.');
   }
 };


 return (
   <main className="flex h-[calc(100vh-100px)] relative">
     <div className="flex-1 flex items-center justify-center">
       <div className="half-page-background-container">
         <Image
           src="/images/Side Image.png"
           alt="Phone and cart"
           width={920}
           height={800}
           className="object-cover object-left mt-45 "
           priority
         />
       </div>
     </div>
     <div className="absolute left-1/2 top-0 bottom-0 w-0.5" />
     <div className="flex-1 mb-39 flex items-center justify-center bg-white">
       <div className="w-100 mt-100">
         <h1 className="text-5xl mb-12">{('login')}</h1>
         <p className="mb-12">{('enterDetails')}</p>
         <form onSubmit={handleSubmit} className="space-y-6">
         
           <div>
             <input
               type="text"
               value={emailPhone}
               onChange={(e) => setEmailPhone(e.target.value)}
               className="w-full mb-12 border-b-2 border-gray-500 text-gray-700 focus:outline-none"
               placeholder={('emailPhone')}
             />
           </div>
           <div>
             <input
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="w-full mb-12 border-b-2 border-gray-500 text-gray-700 focus:outline-none"
               placeholder={('password')}
             />
           </div>
          <Link href="/home"> <button
             type="submit"
             className="w-30 p-4 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200"
           >
             {('loginButton')}
           </button></Link>
           <Link href="/signup" className="text-red-600 hover:underline ml-23">{('forgetPassword')}</Link>
         </form>
        
       </div>
     </div>
   </main>
 );
};


export default SignIn;

