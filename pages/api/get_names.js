// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Table from "@/Model/Table";
import connectDB from "../../lib/connectDB";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow any origin
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST"); // Allow specific methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allow specific headers
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  await connectDB();
  if (req.method === "POST") {
    const { date } = req.body;
    if (!date) {
      res.status(400).send({ error: "date not provided" });
    } else {
      try {
        const data = await Table.find({ date });
        const transformedData = {};
        data.forEach((d) => {
          transformedData[d.table_no] = d.team_name;
        });
        res.status(200).json(transformedData);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    }
  } else {
    res.status(400).send({ error: "Wrong method" });
  }
}
