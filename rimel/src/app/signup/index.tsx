"use client";


import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';


const Signup = () => {
 const [name, setName] = useState('');
 const [emailPhone, setEmailPhone] = useState('');
 const [password, setPassword] = useState('');


 const [nameError, setNameError] = useState('');
 const [emailPhoneError, setEmailPhoneError] = useState('');
 const [passwordError, setPasswordError] = useState('');


 const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault();
   let valid = true;


   if (!name.trim()) {
     setNameError('Please fill out your name');
     valid = false;
   } else {
     setNameError('');
   }


   if (!emailPhone.trim()) {
     setEmailPhoneError('Please fill out your email or phone');
     valid = false;
   } else {
     setEmailPhoneError('');
   }


   if (!password.trim()) {
     setPasswordError('Please fill out your password');
     valid = false;
   } else {
     setPasswordError('');
   }


   if (valid) {
     window.location.href = '/signin';
   }
 };


 return (
   <main className="flex h-[calc(100vh-100px)] relative">
     <div className="flex-1flex items-center justify-center">
       <div className="half-page-background-container">
         <Image
           src="/images/Side Image.png"
           alt="Phone and cart"
           width={920}
           height={900}
           className="object-cover object-left pt-17"
           priority
         />
       </div>
     </div>
     <div className="absolute left-1/2 top-0 bottom-0 w-0.5" />
     <div className="flex-1 mt-1 flex items-center justify-center bg-white">
       <div className="w-100">
         <h1 className="text-5xl mt-39 mb-12">{('createAccount')}</h1>
         <p className="mb-12">{('enterDetails')}</p>
         <form onSubmit={handleSubmit} className="space-y-6">
           <div>
             <input
               type="text"
               value={name}
               onChange={(e) => setName(e.target.value)}
               className="w-full mb-9 border-b-2 border-gray-500 text-gray-700 focus:outline-none"
               placeholder={('name')}
             />
             {nameError && <p className="text-red-600 text-sm mb-4">{nameError}</p>}
           </div>
           <div>
             <input
               type="text"
               value={emailPhone}
               onChange={(e) => setEmailPhone(e.target.value)}
               className="w-full mb-9 border-b-2 border-gray-500 text-gray-700 focus:outline-none"
               placeholder={('emailPhone')}
             />
             {emailPhoneError && <p className="text-red-600 text-sm mb-4">{emailPhoneError}</p>}
           </div>
           <div>
             <input
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="w-full mb-9 border-b-2 border-gray-500 text-gray-700 focus:outline-none"
               placeholder={('password')}
             />
             {passwordError && <p className="text-red-600 text-sm mb-4">{passwordError}</p>}
           </div>


           <button
             type="submit"
             className="w-full p-4 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200"
           >
             {('createButton')}
           </button>
         </form>
         <button
           className="w-full p-3 border border-gray-300 flex items-center justify-center mt-4 mb-10"
         >
           <Image
             src="/images/google-icon.svg"
             alt="Google"
             width={20}
             height={20}
             className="mr-2 "
           />
           {('googleButton')}
         </button>
         <p className="mt-4 text-center">
           {('alreadyHaveAccount')}{' '}
           <Link href="/signin" className="text-blue-600 hover:underline">
             {('signIn')}
           </Link>
         </p>
       </div>
     </div>
   </main>
 );
};


export default Signup;



