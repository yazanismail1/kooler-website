'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';


export default function ExploreSection() {

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
      <div>
          <a href={routeLink} target="_blank" class="flex hover:underline hover:text-blue-700 hover:cursor-pointer justify-center items-center gap-4 mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl">
              Explore Kooler Jo
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="size-9">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              </svg>

          </a>

          <div className='relative flex flex-wrap justify-center gap-3'>
              <Image className='rounded-3xl' src="/Frame 1.png" height={300} width={325} alt="Frame" />
              <Image className='rounded-3xl' src="/Frame 2.png" height={300} width={325} alt="Frame" />
              <Image className='rounded-3xl' src="/Frame 3.png" height={300} width={325} alt="Frame" />
              <Image className='rounded-3xl' src="/Frame 4.png" height={300} width={325} alt="Frame" />
          </div>
      </div>

  );
};