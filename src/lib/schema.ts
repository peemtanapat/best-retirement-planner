import { StateDocument } from "@/interfaces/data";
import mongoose from "mongoose";

const StateSchema = new mongoose.Schema<StateDocument>({
  personalData: {
    name: {
      type: String,
      required: [true, "Please provide a name for this pet."],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    startingAge: { type: Number, required: true },
    retirementAge: { type: Number, required: true },
    retirePeriod: { type: Number },
    desiredMonthlyIncome: {
      type: Number,
    },
  },
  portfolios: [
    {
      name: { type: String, required: true },
      startingAge: { type: Number },
      principalAmount: { type: Number, required: true },
      monthlySave: { type: Number, required: true },
      annualReturn: { type: Number, required: true },
      annualReturnList: { type: [Number], default: [] },
      monthlySaveList: { type: [Number], default: [] },
      styles: {
        color: { type: String },
      },
    },
  ],
});

export default mongoose.models.State ||
  mongoose.model<StateDocument>("State", StateSchema);
