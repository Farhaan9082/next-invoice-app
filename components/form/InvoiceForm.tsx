import { Form, Formik } from "formik";
import { initialValues, values } from "../../schema/Formdata";
import { validationSchema } from "../../schema/Validation";
import FormFields from "./FormFields";
import Button from "../shared/Button";
import { GenerateInvoice } from "../../utilities/GenerateInvoice";

interface invoiceForm {
  setIsOpen: any;
  isOpen: boolean;
}

function InvoiceForm({ setIsOpen, isOpen }: invoiceForm) {
  async function addInvoice(invoice: any) {
    try {
      const res = await fetch("http://localhost:3000/api/invoice/create", {
        body: JSON.stringify(invoice),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  function onSubmit(values: values, props: any) {
    const newInvoice = GenerateInvoice(values, "pending");
    addInvoice(newInvoice);
    props.resetForm();
    setIsOpen((prev: boolean) => !prev);
  }

  function addDraft(props: any) {
    const newInvoice = GenerateInvoice(props.values, "draft");
    console.log(newInvoice);
    props.resetForm();
    setIsOpen((prev: boolean) => !prev);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(props) => (
        <Form>
          <div className="grid grid-rows-form h-form-height py-10 mt-10 md:h-screen md:mt-0 md:py-8">
            <h1 className="text-3xl font-semibold">New Invoice</h1>
            <FormFields />
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
                <Button
                  onClick={() => addDraft(props)}
                  className="bg-purple mr-2"
                  type="button"
                >
                  Draft
                </Button>
                <Button className="bg-light-purple" type="submit">
                  Invoice
                </Button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default InvoiceForm;
