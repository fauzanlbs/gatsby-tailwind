import React from "react";

import Layout from "../components/layout";
import Contact from "../components/contact";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";


function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`tax`, `pajak`, `startup`, `indonesia`]}
        title="Digitax"
      />

     <div className="container mx-auto">
      <div className="text-center px-3 lg:px-0">
        <h1
          className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight text-gray-800"
        >
          Your Tax Solutions, Online!
        </h1>
        <p
          className="leading-normal text-gray-800 text-base md:text-xl lg:text-1xl mb-8"
        >
          Deskripsi singkat tentang apa yang Digitax lakukan, serta services dan products apa yang tersedia untuk klien
        </p>

      </div>

      <div className="flex items-center w-full mx-auto content-end">
        <div
          className="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl"
        ></div>
      </div>
    </div>


    {/* main feature */}

    <section className="bg-indigo-400 border-b py-8 rounded-md shadow-2xl shadow-inner">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2
          className="w-full my-2 text-2xl md:text-5xl font-black leading-tight text-center text-gray-800"
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
                Feature One
              </p>
              <div className="w-full font-bold text-md md:text-xl text-gray-800 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p className="text-gray-600 text-sm md:text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div
            className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
          >
  
            <div className="flex items-center justify-start">
             
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div
            className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
          >
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
                Feature One
              </p>
              <div className="w-full font-bold text-md md:text-xl text-gray-800 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p className="text-gray-600 text-sm md:text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div
            className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
          >
  
            <div className="flex items-center justify-start">
             
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div
            className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
          >
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full text-gray-600 text-xs md:text-sm px-6 mt-6">
                Feature One
              </p>
              <div className="w-full font-bold text-md md:text-xl text-gray-800 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p className="text-gray-600 text-sm md:text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div
            className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
          >
  
            <div className="flex items-center justify-start">
             
            </div>
          </div>
        </div>
      </div>
    </section>

    


    <section className="bg-brown-200 border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
      <h2
          className="w-full my-2 text-2xl md:text-5xl font-black leading-tight text-center text-gray-800"
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
             
            <div className="w-full font-bold text-md md:text-xl text-gray-800 px-6 mt-10">
                Lorem ipsum dolor sit amet.
              </div>
              <p className="text-gray-600 text-sm md:text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div
            className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
          >
         
            <div className="flex items-center justify-start">
             
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div
            className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
          >
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              
            <div className="w-full font-bold text-md md:text-xl text-gray-800 px-6 mt-10">
                Lorem ipsum dolor sit amet.
              </div>
              <p className="text-gray-600 text-sm md:text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div
            className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
          >
        
            <div className="flex items-center justify-center">
              
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div
            className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
          >
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
             
            <div className="w-full font-bold text-md md:text-xl text-gray-800 px-6 mt-10">
                Lorem ipsum dolor sit amet.
              </div>
              <p className="text-gray-600 text-sm md:text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div
            className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
          >
          
            <div className="flex items-center justify-end">
             
            </div>
          </div>
        </div>
      </div>
    </section>

    <h2
          className="w-full my-2 text-3xl md:text-5xl font-black leading-tight text-center text-gray-800 mt-20"
        >
          Products & Services
        </h2>
        <p className="w-full my-2 text-based md:text-2xl font-black leading-tight text-center text-gray-800">Berisi Highlight Products & Services yang ada di Digitax</p>

    

      <section className="text-center mb-20">
        <img
          alt="Cat and human sitting on a couch"
          className="block mx-auto w-1/2"
          src={catAndHumanIllustration}
        />

        

        <p className="leading-loose">
          Kumpulan Peraturan Perpajakan yang dapat diakses setiap saat melalui smartphone anda
        </p>
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3 rounded">
          Download The App
        </h2>

      </section>
      <section className="bg-gray-800 border-b p-8 rounded-lg">
      <Contact/>
      </section>
    </Layout>
  );
}

export default IndexPage;
