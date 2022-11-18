import Head from "next/head";
import React from "react";
import { Presentation } from "../components/header/presentation";
import { Map } from "../components/map";
import Navbar from "../components/navbar";
import { SocialMedia } from "../components/social-media";
import { siteTitle } from "../helper/site-title.helper";

const Home = () => {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Navbar />
      <header className="flex-col header flex bg-cover justify-center items-center min-h-screen">
        <Presentation />
        <SocialMedia />
      </header>
      <Map />
    </div>
  );
};

export default Home;
