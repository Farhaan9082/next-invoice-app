import { NextApiRequest, NextApiResponse } from "next";
import { database } from "../../../../firebase/clientApp";
import { collection, getDocs } from "firebase/firestore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const db = collection(database, "invoices");
      const invoiceSnapshot = await getDocs(db);
      const invoiceData = invoiceSnapshot.docs.map((doc) => doc.data());
      res.status(200).json(invoiceData);
    } catch (error) {
      console.log(error);
    }
  }
}
