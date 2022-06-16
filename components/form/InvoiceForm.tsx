import { Form, Formik } from "formik";
import { initialValues } from "../../schema/Formdata";
import FormFields from "./FormFields";
import Button from "../shared/Button";

function InvoiceForm() {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="mt-20">
      <h1 className="text-2xl font-semibold">New Invoice</h1>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(props) => (
          <>
            <Form>
              <FormFields />
              <div className="mt-6 flex justify-between">
                <Button onClick={() => {}} className="bg-red" type="button">Cancel</Button>
                <div>
                  <Button onClick={() => {}} className="bg-purple mr-2" type="button">Draft</Button>
                  <Button className="bg-light-purple" type="submit">Invoice</Button>
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
