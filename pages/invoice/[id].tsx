import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import InvoiceModal from "../../components/form/InvoiceModal";
import Navbar from "../../components/home/Navbar";
import Button from "../../components/shared/Button";
import Status from "../../components/shared/Status";
import { database } from "../../firebase/clientApp";

const invoice: NextPage = ({ data, id }: any) => {
  const titleId = id?.toString().toUpperCase();
  const [invoiceData, setInvoiceData] = useState(data[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const deleteInvoice = async () => {
    await deleteDoc(doc(database, "invoices", id));
    router.push("/");
  };

  const updateStatus = async () => {
    await updateDoc(doc(database, "invoices", id), {
      invoiceStatus: "paid",
    });
    router.push("/");
  };

  return (
    <div className="md:flex">
      <Head>
        <title>Invoice | #{titleId}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="w-full md:ml-20 mt-20 md:mt-0">
        <div className="max-w-2xl mx-auto flex-grow flex-col px-6 my-6 xs:my-8 xs:px-8 md:px-10 md:max-w-3xl md:my-12 lg:mt-14">
          <InvoiceModal
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            formType="UpdateForm"
            invoiceData={invoiceData}
            setInvoiceData={setInvoiceData}
          />
          <Link href="/">
            <a className="flex gap-3 items-center font-light w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-light-purple"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Go back
            </a>
          </Link>
          <div className="flex px-4 py-3 bg-purple w-full justify-between mt-6 rounded-md items-center md:py-6 md:px-5 md:justify-start">
            <h3 className="font-light md:mr-4">Status</h3>
            <Status invoiceStatus={invoiceData.invoiceStatus} />
            <div className="mt-8 hidden gap-2 justify-end items-center md:flex md:mt-0 w-[80%]">
              <Button
                onClick={() => {
                  setIsOpen((prev: boolean) => !prev);
                }}
                className="bg-purple md:bg-white/5"
                type="button"
              >
                Edit
              </Button>
              <Button onClick={deleteInvoice} className="bg-red" type="button">
                Delete
              </Button>
              {invoiceData.invoiceStatus !== "paid" && (
                <Button
                  onClick={updateStatus}
                  className="bg-light-purple"
                  type="button"
                >
                  Mark As Paid
                </Button>
              )}
            </div>
          </div>
          <div className="w-full px-5 py-4 bg-purple mt-5 rounded-md md:px-7 md:py-5 md:mt-6">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5 md:flex-row md:justify-between">
                <div className="">
                  <h3 className="md:text-xl md:font-semibold">
                    <span className="text-light-purple">#</span>
                    {titleId}
                  </h3>
                  <h2 className="font-light text-white/80 -mt-1">
                    {invoiceData.productDescription}
                  </h2>
                </div>
                <div className="w-32 leading-tight md:text-right">
                  <h2 className="font-light text-white/80">
                    {invoiceData.billerStreetAddress}
                  </h2>
                  <h2 className="font-light text-white/80">
                    {invoiceData.billerCity}
                  </h2>
                  <h2 className="font-light text-white/80">
                    {invoiceData.billerPinCode}
                  </h2>
                  <h2 className="font-light text-white/80">
                    {invoiceData.billerCountry}
                  </h2>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-x-2">
                <div className="flex flex-col justify-between">
                  <div className="">
                    <h2 className="font-light text-white/80">Invoice Date</h2>
                    <h1 className="font-semibold text-lg -mt-1">
                      {invoiceData.invoiceDate}
                    </h1>
                  </div>
                  <div className="">
                    <h2 className="font-light text-white/80">Payment Due</h2>
                    <h1 className="font-semibold text-lg -mt-1">
                      {invoiceData.dueDate}
                    </h1>
                  </div>
                </div>
                <div className="">
                  <h2 className="font-light text-white/80">Bill To</h2>
                  <h1 className="font-medium text-lg -mt-1">
                    {invoiceData.clientName}
                  </h1>
                  <div className="leading-tight">
                    <h2 className="font-light text-white/80">
                      {invoiceData.clientStreetAddress}
                    </h2>
                    <h2 className="font-light text-white/80">
                      {invoiceData.clientCity}
                    </h2>
                    <h2 className="font-light text-white/80">
                      {invoiceData.clientPinCode}
                    </h2>
                    <h2 className="font-light text-white/80">
                      {invoiceData.clientCountry}
                    </h2>
                  </div>
                </div>
                <div className="mt-3 col-span-2 md:col-span-1 md:mt-0">
                  <h2 className="font-light text-white/80">Sent to</h2>
                  <h1 className="font-medium text-lg -mt-1">
                    {invoiceData.clientEmail}
                  </h1>
                </div>
                <div className="w-full col-span-2 mt-4 md:col-span-3">
                  <div className="p-6 bg-white/5 rounded-t-md flex flex-col gap-4 md:hidden">
                    {invoiceData.items.map(({ id, name, total }: any) => (
                      <div
                        key={id}
                        className="flex justify-between font-medium"
                      >
                        <h2>{name}</h2>
                        <h2>
                          <span>₹</span>
                          {total.toLocaleString()}
                        </h2>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 hidden bg-white/5 rounded-t-md flex-col gap-4 md:grid md:grid-cols-4 md:justify-items-center md:px-7">
                    <h3 className="justify-self-start text-white/70 text-sm">
                      Item Name
                    </h3>
                    <h3 className="text-white/70 text-sm">QTY.</h3>
                    <h3 className="text-white/70 text-sm">Price</h3>
                    <h3 className="justify-self-end text-white/70 text-sm">
                      Total
                    </h3>
                    {invoiceData.items.map(
                      ({ id, name, price, quantity, total }: any) => (
                        <React.Fragment key={id}>
                          <h2 className="justify-self-start mt-2 text-lg">
                            {name}
                          </h2>
                          <h2 className="mt-2 text-lg">{quantity}</h2>
                          <h2 className="mt-2 text-lg">{price}</h2>
                          <h2 className="justify-self-end mt-2 text-lg">
                            <span>₹</span>
                            {total.toLocaleString()}
                          </h2>
                        </React.Fragment>
                      )
                    )}
                  </div>
                  <div className="px-6 py-5 flex justify-between bg-black/90 rounded-b-md md:px-7">
                    <h2 className="font-medium">Amount Due</h2>
                    <h1 className="font-bold text-2xl">
                      <span>₹</span>
                      {invoiceData.total.toLocaleString()}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex gap-2 justify-end items-center md:hidden">
            <Button
              onClick={() => {
                setIsOpen((prev: boolean) => !prev);
              }}
              className="bg-purple"
              type="button"
            >
              Edit
            </Button>
            <Button onClick={deleteInvoice} className="bg-red" type="button">
              Delete
            </Button>
            {invoiceData.invoiceStatus !== "paid" && (
              <Button
                onClick={updateStatus}
                className="bg-light-purple"
                type="button"
              >
                Mark As Paid
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default invoice;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/invoice/read/${id}`
  );
  const data = await res.json();

  return {
    props: {
      data,
      id,
    },
  };
};
