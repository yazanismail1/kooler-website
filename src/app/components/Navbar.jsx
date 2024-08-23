import Image from 'next/image';
import React from 'react';


export default function Navbar() {
  return (
      <nav class="bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]">
          <div class="flex flex-wrap justify-around lg:justify-between items-center mx-auto max-w-screen-xl p-4">
              <a href="https://www.kooler-jo.com" class="flex items-center space-x-3 rtl:space-x-reverse">
                  <Image src="/blue.png" width={32} height={32} alt="Kooler Jo Logo" />
              </a>
              <div class="flex items-center space-x-6 rtl:space-x-reverse">
                  {/* <a href="tel:962775818618" class="text-md  text-[#0C5BA9]  hover:underline hidden sm:block">+962 77 5818 618</a> */}

                  <a href="https://forms.gle/xrQaRZuycrwZs4To8" target="_blank" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ">
                      Register Now
                  </a>
              </div>
          </div>
      </nav>
  );
};