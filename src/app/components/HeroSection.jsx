'use client';
import React, { useEffect, useState } from 'react';


export default function HeroSection() {
    const [routeLink, setRouteLink] = useState('');

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            setRouteLink('https://apps.apple.com/jo/app/kooler-%D9%83%D9%88%D9%84%D8%B1/id6526497412');
        } else if (/android/i.test(userAgent)) {
            setRouteLink('https://play.google.com/store/apps/details?id=com.kooler.water_user&pcampaignid=web_share');
        } else {
            setRouteLink('https://store-page-two.vercel.app/');
        }
    }, []);

  return (
      <section class="py-16 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]">
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
              <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Kooler Jo - Your Water Delivery Experts!</h1>
              <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">Connecting you with the best water vendors in town and more. Order water bottles and more with ease. Refreshment is just a tap away!</p>
              <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                  <a href="https://forms.gle/xrQaRZuycrwZs4To8" target="_blank" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ">
                      Continue as vendor
                      <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                  </a>
                  <a href={routeLink} target="_blank" class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                      Download App
                  </a>
              </div>
          </div>
      </section>

  );
};