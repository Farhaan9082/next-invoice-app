import { Form, Formik } from "formik";
import { initialValues } from "../../schema/Formdata";
import FormFields from "./FormFields";

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
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
}

export default InvoiceForm;
