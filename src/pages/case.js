import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function Case() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8">
          <blockquote className="pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
           Case Studies
          </blockquote>

         
        </div>

        <figure className="w-2/3 md:w-1/3">
          <img alt="Tax Relax" src={catAndHumanIllustration} />
        </figure>
      </section>
    </Layout>
  );
}

export default Case;
