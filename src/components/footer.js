
import React from "react";


function Footer(){

   

    return(
        <footer className="gradient text-center">
        <div className="m-5 mx-auto">
        <div className="flex flex-col md:flex-row py-6 mx-auto justify-around">
       

          <div className="flex-1">
            <p className="uppercase font-extrabold md:mb-4 text-white">Feature</p>
            {/* <ul className="list-reset mb-6">
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
            </ul> */}
          </div>
          <div className="flex-1">
          <p className="uppercase font-extrabold md:mb-4 text-white">About</p>
            
          </div>
          <div className="flex-1">
          <p className="uppercase font-extrabold md:mb-4 text-white">Testimonials</p>
          
          </div>
          <div className="flex-1">
          <p className="uppercase font-extrabold md:mb-4 text-white">Contact</p>
           
          </div>
          <div className="flex-1">
          <p className="uppercase font-extrabold md:mb-4 text-white">Download</p>
           
          </div>
        </div>
           
      </div>
      <div className="mx-auto m-10">
            <h3 className="  text-white text-center text-xs md:text-sm">Menara Tower Lt X Jalan TB Simatupang No. 88, Jakarta Selatan, Indonesia</h3>
            <h3 className="  text-white text-center text-xs md:text-sm">@ PT Digital Tax Indonesia </h3>
            </div>
      </footer>
    )
}

export default Footer;