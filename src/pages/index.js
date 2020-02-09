import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";


function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`tax`, `pajak`, `startup`, `indonesia`]}
        title="Digitax"
      />

     <div className="container mx-auto h-screen">
      <div className="text-center px-3 lg:px-0">
        <h1
          className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight"
        >
          Your Tax Solutions, Online!
        </h1>
        <p
          className="leading-normal text-gray-800 text-base md:text-xl lg:text-1xl mb-8"
        >
          Deskripsi singkat tentang apa yang Digitax lakukan, serta services dan products apa yang tersedia untuk klien
        </p>

        <button
          className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48"
        >
          Sign Up
        </button>
        <a
          href="#"
          className="inline-block mx-auto lg:mx-0 hover:underline bg-transparent text-gray-600 font-extrabold my-2 md:my-6 py-2 lg:py-4 px-8"
          >View Additional Action</a
        >
      </div>

      <div className="flex items-center w-full mx-auto content-end">
        <div
          className="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl"
        ></div>
      </div>
    </div>


    {/* main feature */}

    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2
          className="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800"
        >
          Main Features / Benefits
        </h2>
        <div className="w-full mb-4">
          <div
            className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div
            className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
          >
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
                GETTING STARTED
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p className="text-gray-600 text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div
            className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
          >
  
            <div className="flex items-center justify-start">
              <button
                className="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg"
              >
              
                Action
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div
            className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
          >
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
                GETTING STARTED
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p className="text-gray-600 text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div
            className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
          >
            <div className="flex items-center justify-center">
              <button
                className="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg"
              >
                Action
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div
            className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
          >
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
                GETTING STARTED
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p className=" text-gray-600 text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div
            className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
          >
            <div className="flex items-center justify-end">
              <button
                className="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg"
              >
                Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    


    <section className="bg-gray-100 border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2
          className="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800"
        >
          Testimonials
        </h2>
        <div className="w-full mb-4">
          <div
            className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div
            className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
          >
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
                GETTING STARTED
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p className="text-gray-600 text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div
            className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
          >
         
            <div className="flex items-center justify-start">
              <button
                className="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg"
              >
              
                Action
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div
            className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
          >
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
                GETTING STARTED
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p className="text-gray-600 text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div
            className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
          >
        
            <div className="flex items-center justify-center">
              <button
                className="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg"
              >
                Action
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div
            className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
          >
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
                GETTING STARTED
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p className=" text-gray-600 text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div
            className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
          >
          
            <div className="flex items-center justify-end">
              <button
                className="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg"
              >
                Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    

      <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block mx-auto w-1/2"
          src={catAndHumanIllustration}
        />

        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Hey there! Welcome to your first Gatsby site.
        </h2>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{` `}
          <a
            className="font-bold no-underline text-gray-900"
            href="https://tailwindcss.com/"
          >
            Tailwind
          </a>
          , a utility-first CSS framework.
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
