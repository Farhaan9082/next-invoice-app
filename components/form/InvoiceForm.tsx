import { Form, Formik } from "formik";
import { initialValues } from "../../schema/Formdata";
import { validationSchema } from "../../schema/Validation";
import FormFields from "./FormFields";
import Button from "../shared/Button";

interface invoiceForm {
  setIsOpen: any;
  isOpen: boolean;
}

function InvoiceForm({ setIsOpen, isOpen }: invoiceForm) {
  const onSubmit = (values: any, props: any) => {
    console.log(values);
    props.resetForm();
  };

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
                  onClick={() => {}}
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
