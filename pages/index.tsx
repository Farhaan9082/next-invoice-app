import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/home/Navbar";
import Panel from "../components/home/Panel";
import InvoiceModal from "../components/form/InvoiceModal";
import { useState } from "react";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="md:flex">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="max-w-2xl mx-auto flex-grow flex-col px-6 xs:px-8 md:px-10 md:max-w-3xl">
        <Panel setIsOpen={setIsOpen} />
        <InvoiceModal setIsOpen={setIsOpen} isOpen={isOpen} />
      </main>
    </div>
  );
};

export default Home;
