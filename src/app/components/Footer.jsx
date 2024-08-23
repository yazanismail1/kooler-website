import React from 'react';


export default function Footer() {
  return (
      <footer class="bg-blue-900 rounded-xl shadow m-4">
          <div class="w-full mx-auto max-w-screen-xl p-4 flex flex-wrap md:justify-between justify-center items-center">
              <span class="text-sm text-white sm:text-center">© 2024 <a href="https://kooler-jo.com/" class="hover:underline">Kooler Jo™</a>. All Rights Reserved.
              </span>
              <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
                  <li>
                      <a href="https://forms.gle/xrQaRZuycrwZs4To8" target="_blank" class="hover:underline">Register Now</a>
                  </li>
              </ul>
          </div>
      </footer>

  );
};