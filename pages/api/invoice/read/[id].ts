import { NextApiRequest, NextApiResponse } from "next";
import { database } from "../../../../firebase/clientApp";
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

  if (req.method === "GET") {
    try {
      const invoiceSnapshot = await getDocs(invoiceQuery);
      const invoiceData = invoiceSnapshot.docs.map((doc) => doc.data());
      res.status(200).json(invoiceData);
    } catch (error) {
      console.log(error);
    }
  }
}
