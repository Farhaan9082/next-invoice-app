import { Form, Formik } from "formik";
import { initialValues } from "../../schema/Formdata";
import FormFields from "./FormFields";
import Button from "../shared/Button";

function InvoiceForm() {
  const onSubmit = () => {};

  return (
    <div className="mt-20">
      <h1 className="text-2xl font-semibold">New Invoice</h1>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(props) => (
          <>
            <Form>
              <FormFields />
              <div className="mt-6 flex justify-between">
                <Button color="red">Cancel</Button>
                <div>
                  <Button color="purple" shifted>Draft</Button>
                  <Button color="light-purple">Invoice</Button>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
}

export default InvoiceForm;
