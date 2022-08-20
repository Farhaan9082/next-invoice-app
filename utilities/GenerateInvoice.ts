import { uid } from "uid";
import { values } from "../schema/Formdata";

interface dateOptions {
  year?: "numeric" | "2-digit";
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
  day?: "numeric" | "2-digit";
}

const dateOptions: dateOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

const getDueDate = (paymentTerms: string) => {
  const futureDate = new Date();
  const dueDateUnix = futureDate.setDate(
    futureDate.getDate() + parseInt(paymentTerms)
  );
  const dueDate = new Date(dueDateUnix).toLocaleDateString(
    "en-us",
    dateOptions
  );

  return dueDate;
};

const getTotal = (items: any) => {
  let total = 0;
  for (const item of items) {
    total += item.total;
  }

  return total;
};

export const GenerateInvoice = (values: values, status: string) => {
  return {
    ...values,
    invoiceId: uid(6),
    invoiceStatus: status,
    dueDate: getDueDate(values.paymentTerms),
    total: getTotal(values.items),
  };
};
