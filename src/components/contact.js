
import React from "react";


function Contact(){


    return(
        <section>
        <form className="mx-auto md:w-1/2">
        <h2
        className="w-full my-2 text-5xl font-black leading-tight text-center text-white"
        >
          Get In Touch
        </h2>

         

          {/* <label
            className="block mb-2 text-xs font-bold uppercase mt-12"
            htmlFor="message"
          >
            Message
          </label> */}

          <textarea
            className="w-full mb-6 form-textarea mt-12"
            id="message"
            placeholder="Message..."
            rows="8"
          />

          {/* <label
            className="block mb-2  text-xs font-bold uppercase"
            htmlFor="first-name"
          >
            Email Address
          </label> */}
        
          <input
            className="w-full mb-6 form-input"
            id="first-name"
            placeholder="Email Adress"
            type="text"
          />

          {/* <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="last-name"
          >
            Full Name
          </label> */}

          <input
            className="w-full mb-6 form-input"
            id="last-name"
            placeholder="Full Name"
            type="text"
          />

          

          <button className="w-full px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
            Submit
          </button>

         
        </form>
      </section>
    )
}

export default Contact;