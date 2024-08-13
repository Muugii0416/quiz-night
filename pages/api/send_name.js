// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Table from "@/Model/Table";
import connectDB from "../lib/connectDB";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "POST") {
    const { table_no, team_name } = req.body;
    if (!table_no || !team_name) {
      res.status(400).send({ error: "table_no or team_name not provided" });
    } else {
      try {
        const updated = await Table.findOneAndUpdate(
          { table_no },
          { team_name },
          { new: true },
        );
        if (updated) {
          res.status(200).json({ ...updated._doc });
          return;
        }
        const table = new Table({
          table_no,
          team_name,
        });
        const data = await table.save();
        res.status(200).json({ ...data._doc });
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    }
  } else {
    res.status(400).send({ error: "Wrong method" });
  }
}
