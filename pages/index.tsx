import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/home/Navbar";
import Panel from "../components/home/Panel";
import InvoiceModal from "../components/form/InvoiceModal";
import { useState } from "react";
import Invoice from "../components/home/Invoice";

export interface invoice {
  invoiceId: string;
  dueDate: string;
  clientName: string;
  total: number;
  invoiceStatus: string;
  href: string;
}

const Home: NextPage = ({ data }: any) => {
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
      <main className="w-full md:ml-20 mt-20 md:mt-0">
        <div className="max-w-2xl mx-auto flex-grow flex-col px-6 xs:px-8 md:px-10 md:max-w-3xl">
          <Panel setIsOpen={setIsOpen} invoiceCount={data.length} />
          <InvoiceModal
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            formType="InvoiceForm"
          />
          <div className="grid grid-cols-1 gap-5 mt-5 mb-10">
            {data.map(
              ({
                invoiceId,
                dueDate,
                clientName,
                total,
                invoiceStatus,
              }: invoice) => (
                <Invoice
                  key={invoiceId}
                  invoiceId={invoiceId}
                  dueDate={dueDate}
                  clientName={clientName}
                  total={total}
                  invoiceStatus={invoiceStatus}
                  href={`/invoice/${invoiceId}`}
                />
              )
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/invoice/read`
  );
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
};
