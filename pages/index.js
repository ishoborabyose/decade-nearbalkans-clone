import Head from "next/head";
import Banner from "../components/banner";
import Caurse from "../components/caurse";
import Certificate from "../components/certificate";
import Development from "../components/development";

import Header from "../components/header";
import Wallet from "../components/wallet";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>NEAR dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-red-200">Hello world</div>
      <Header />
      <Banner />
      <Wallet />
      <Caurse />
      <Certificate />
      <Development />
    </div>
  );
}
