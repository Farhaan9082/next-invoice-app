import { NextApiRequest, NextApiResponse } from "next";
import { database } from "../../../firebase/clientApp";
import { collection, getDocs, query, where } from "firebase/firestore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const invoiceQuery = query(
    collection(database, "invoices"),
    where("invoiceId", "==", id)
  );

  if (req.method === "POST") {
    try {
      const invoiceData = req.body;
      const invoiceSnapshot = await getDocs(invoiceQuery);
      res.status(200).json(invoiceData);
    } catch (error) {
      console.log(error);
    }
  }
}
