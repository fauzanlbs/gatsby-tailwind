
import React from "react";
import {  Link } from "gatsby";


function Footer(){

   

    return(
        <footer>
        <div className="container mx-auto mt-8 px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
        <Link className="flex items-center no-underline text-white" to="/">
        <svg
            className="fill-current h-8 mr-2 w-8"
            height="54"
            viewBox="0 0 54 54"
            width="54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-bold text-xl tracking-tight">
            Digitax
          </span>
        </Link>

          <div className="flex-1">
            <p className="uppercase font-extrabold text-gray-500 md:mb-6">Links</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >FAQ</a
                >
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >Help</a
                >
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >Support</a
                >
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase font-extrabold text-gray-500 md:mb-6">Legal</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >Terms</a
                >
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >Privacy</a
                >
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase font-extrabold text-gray-500 md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >Facebook</a
                >
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >Linkedin</a
                >
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >Twitter</a
                >
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase font-extrabold text-gray-500 md:mb-6">
              Company
            </p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >Official Blog</a
                >
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >About Us</a
                >
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      </footer>
    )
}

export default Footer;