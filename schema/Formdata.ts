interface values {
  billerStreetAddress: string;
  billerCity: string;
  billerPinCode: string;
  billerCountry: string;
  clientName: string;
  clientEmail: string;
  clientStreetAddress: string;
  clientCity: string;
  clientPinCode: string;
  clientCountry: string;
  invoiceDate: string;
  paymentTerms: string;
  paymentDueDateUnix: Date;
  paymentDueDate: Date;
  productDescription: string;
  invoicePending: number;
  invoiceDraft: number;
  items: [];
  invoiceTotal: number;
}

interface dateOptions {
    year?: 'numeric' | '2-digit';
    month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
    day?: 'numeric' | '2-digit';
}

const invoiceDateUnix = Date.now();
const dateOptions: dateOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

export const initialValues: values = {
  billerStreetAddress: "",
  billerCity: "",
  billerPinCode: "",
  billerCountry: "",
  clientName: "",
  clientEmail: "",
  clientStreetAddress: "",
  clientCity: "",
  clientPinCode: "",
  clientCountry: "",
  invoiceDate: new Date(invoiceDateUnix).toLocaleDateString(
    "en-us",
    dateOptions
  ),
  paymentTerms: "30",
  paymentDueDateUnix: new Date(),
  paymentDueDate: new Date(),
  productDescription: "",
  invoicePending: 0,
  invoiceDraft: 0,
  items: [],
  invoiceTotal: 0,
};
