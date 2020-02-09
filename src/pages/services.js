import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function Services() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="container mx-auto">
     
        <div className="container mx-auto text-center">
        <h4
          className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight"
        >
          Services
        </h4>
        <p
          className="leading-normal text-gray-800 text-base md:text-xl lg:text-1xl mb-8"
        >
          List Services yang disediakan oleh Digitax
        </p>
        <table className="table-auto mx-auto mb-20">
  <thead>
    <tr>
      <th className="w-1/2 px-4 py-2">Jenis Layanan</th>
      <th className="w-1/4 px-4 py-2">Deskripsi Layanan</th>
      <th className="w-1/4 px-4 py-2">Book Online</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-gray-100">
      <td className="border px-4 py-2">SPT Tahunan</td>
      <td className="border px-4 py-2">Desember 10, 2020</td>
      <td className="border px-4 py-2 text-center">edit</td>
    </tr>
    <tr className="bg-gray-100">
    <td className="border px-4 py-2">SPT Tahunan</td>
      <td className="border px-4 py-2">Desember 10, 2020</td>
      <td className="border px-4 py-2 text-center">edit</td>
    </tr>
    <tr className="bg-gray-100">
      <td className="border px-4 py-2">SPT Tahunan</td>
      <td className="border px-4 py-2">Desember 10, 2020</td>
      <td className="border px-4 py-2 text-center">edit</td>
    </tr>
  </tbody>
</table>



<h4
          className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight"
        >
          Training & Workshops
        </h4>
       
        <table className="table-auto mx-auto">
  <thead>
    <tr>
      <th className="w-1/2 px-4 py-2">Jenis Layanan</th>
      <th className="w-1/4 px-4 py-2">Deskripsi Layanan</th>
      <th className="w-1/4 px-4 py-2">Book Online</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-gray-100">
      <td className="border px-4 py-2">SPT Tahunan</td>
      <td className="border px-4 py-2">Desember 10, 2020</td>
      <td className="border px-4 py-2 text-center">edit</td>
    </tr>
    <tr className="bg-gray-100">
    <td className="border px-4 py-2">SPT Tahunan</td>
      <td className="border px-4 py-2">Desember 10, 2020</td>
      <td className="border px-4 py-2 text-center">edit</td>
    </tr>
    <tr className="bg-gray-100">
      <td className="border px-4 py-2">SPT Tahunan</td>
      <td className="border px-4 py-2">Desember 10, 2020</td>
      <td className="border px-4 py-2 text-center">edit</td>
    </tr>
  </tbody>
</table>

<figure className="mx-auto">
          <img alt="tax relaxing" src={catAndHumanIllustration} />
        </figure>
        </div>

        

       
      </section>
    </Layout>
  );
}

export default Services;
