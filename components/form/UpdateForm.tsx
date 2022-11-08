import { Form, Formik } from "formik";
import { values } from "../../schema/Formdata";
import { validationSchema } from "../../schema/Validation";
import FormFields from "./FormFields";
import Button from "../shared/Button";
import { GenerateInvoice } from "../../utilities/GenerateInvoice";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface updateForm {
  setIsOpen: any;
  isOpen: boolean;
  invoiceData: any;
  setInvoiceData: any;
}

function UpdateForm({
  setIsOpen,
  isOpen,
  invoiceData,
  setInvoiceData,
}: updateForm) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  async function addInvoice(invoice: any) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/invoice/create`,
        {
          body: JSON.stringify(invoice),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        }
      );

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function onSubmit(values: values, props: any) {
    setIsLoading(true);
    console.log(values);
    await addInvoice(values);
    setInvoiceData(values);
    setIsOpen((prev: boolean) => !prev);
    router.replace(router.asPath);
    setIsLoading(false);
    props.resetForm();
  }

  async function addDraft(props: any) {
    setIsLoading(true);
    const newInvoice = GenerateInvoice(props.values, "draft");
    await addInvoice(newInvoice);
    props.resetForm();
    setIsOpen((prev: boolean) => !prev);
    router.replace(router.asPath);
    setIsLoading(false);
  }

  return (
    <Formik
      enableReinitialize
      initialValues={invoiceData}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(props) => (
        <Form>
          <div className="grid grid-rows-form h-form-height py-10 mt-10 md:h-screen md:mt-0 md:py-8">
            <h1 className="text-3xl font-semibold">
              Edit | #{invoiceData.invoiceId}
            </h1>
            <FormFields />

            {isLoading && (
              <div
                className="absolute top-0 left-0 rounded-r-xl w-full h-full flex justify-center items-center bg-black/25"
                role="status"
              >
                <svg
                  aria-hidden="true"
                  className="mr-2 w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-light-purple"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  ></path>
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}

            <div className="mt-6 pb-4 flex justify-between md:pb-0">
              <Button
                onClick={() => {
                  setIsOpen((prev: boolean) => !prev);
                  props.resetForm();
                }}
                className="bg-red"
                type="button"
              >
                Cancel
              </Button>
              <div>
                <Button className="bg-light-purple" type="submit">
                  Update Invoice
                </Button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default UpdateForm;
