// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Score from "@/Model/Score";
import connectDB from "../lib/connectDB";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "POST") {
    const { point, team_name } = req.body;
    if (!point || !team_name) {
      res.status(400).send({ error: "point or team_name not provided" });
    } else {
      try {
        const table = new Score({
          point,
          team_name: team_name.toLowerCase(),
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
