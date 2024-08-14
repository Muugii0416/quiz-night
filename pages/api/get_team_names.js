// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Score from "@/Model/Score";
import connectDB from "../lib/connectDB";

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
  if (req.method === "GET") {
    try {
      const aggregation = [];
      aggregation.push({
        $group: {
          _id: "$team_name",
        },
      });
      aggregation.push({
        $project: {
          _id: 0,
          team_name: "$_id",
          points: 1,
        },
      });
      const data = await Score.aggregate(aggregation);
      res.status(200).json(data.map((d) => d.team_name));
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  } else {
    res.status(400).send({ error: "Wrong method" });
  }
}
