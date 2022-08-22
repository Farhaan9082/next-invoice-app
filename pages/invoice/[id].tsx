import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Navbar from "../../components/home/Navbar";

const invoice: NextPage = ({ data, id }: any) => {
  const titleId = id?.toString().toUpperCase();

  return (
    <div className="md:flex">
      <Head>
        <title>Invoice | #{titleId}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="w-full md:ml-20">
        <div className="max-w-2xl mx-auto flex-grow flex-col px-6 my-6 xs:my-8 xs:px-8 md:px-10 md:max-w-3xl md:my-12 lg:mt-14">
          {id}
        </div>
      </main>
    </div>
  );
};

export default invoice;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/api/invoice/read/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
      id,
    },
  };
};
