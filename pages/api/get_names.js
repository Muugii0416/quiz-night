// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Table from "@/Model/Table";
import connectDB from "../lib/connectDB";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "GET") {
    try {
      const data = await Table.find();
      const transformedData = {};
      data.forEach((d) => {
        transformedData[d.table_no] = d.team_name;
      });
      res.status(200).json(transformedData);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  } else {
    res.status(400).send({ error: "Wrong method" });
  }
}
