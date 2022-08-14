import * as yup from "yup";

export const validationSchema = yup.object().shape({
  billerStreetAddress: yup.string().required("Required"),
  billerCity: yup.string().required("Required"),
  billerPinCode: yup.string().required("Required"),
  billerCountry: yup.string().required("Required"),
  clientName: yup.string().required("Required"),
  clientEmail: yup.string().email("Invalid email").required("Required"),
  clientStreetAddress: yup.string().required("Required"),
  clientCity: yup.string().required("Required"),
  clientPinCode: yup.string().required("Required"),
  clientCountry: yup.string().required("Required"),
  invoiceDate: yup.date().required("Required"),
  paymentTerms: yup.string().required("Required"),
  productDescription: yup.string().required("Required"),
  items: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string().required("Required"),
        quantity: yup
          .number()
          .typeError("Must be a number")
          .required("Required"),
        price: yup
          .number()
          .typeError("Must be a number")
          .required("Required"),
        total: yup.number(),
      })
    )
    .min(1, "An item must be added"),
});
