import { NextApiRequest, NextApiResponse } from "next";
import { database } from "../../../firebase/clientApp";
import { collection, addDoc } from "firebase/firestore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const invoiceData = req.body;

    try {
      const db = collection(database, "invoices");
      const docRef = await addDoc(db, invoiceData);
      res.status(200).json({ message: "success" });
    } catch (error) {
      console.log(error);
    }
  }
}
