// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Score from "@/Model/Score";
import connectDB from "../lib/connectDB";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "GET") {
    try {
      const aggregation = [];
      aggregation.push({
        $group: {
          _id: "$team_name",
          points: {
            $sum: "$point",
          },
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
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  } else {
    res.status(400).send({ error: "Wrong method" });
  }
}
