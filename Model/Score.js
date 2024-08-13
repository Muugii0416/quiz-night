import mongoose from "mongoose";

const min = [
  0,
  "The value of path `{PATH}` ({VALUE}) is beneath the limit ({MIN}).",
];

const Score = mongoose.Schema(
  {
    point: {
      type: Number,
      required: true,
      min: min,
    },
    team_name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Score || mongoose.model("Score", Score);
