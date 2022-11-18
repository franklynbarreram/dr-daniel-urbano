import Head from "next/head";
import Link from "next/link";
import React from "react";
import { siteTitle } from "../helper/site-title.helper";

const PageNotFound = () => {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <main className="flex flex-col items-center justify-center bg-cover min-h-screen bg-gradient">
        <img
          className="max-w-[150px] md:max-w-[250px]"
          src="/images/aliant-icon.png"
          alt=""
        />
        <h2 className="text-4xl px-4 text-center md:text-5xl font-semibold text-white mt-7">
          404 page not found
        </h2>
        <div className="container-button mt-8">
          <Link href="/">
            <a className="text-white bg-secondary font-medium px-4 py-2 border border-primary rounded-full">
              Ir al inicio
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default PageNotFound;
