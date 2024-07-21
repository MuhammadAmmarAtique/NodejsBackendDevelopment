import mongoose from "mongoose";

const worksInHospitalSchema = new mongoose.Schema({
  hospitalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
  },
  workingHours: {
    type: Number,
    required: true,
  }
});

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },
    // way#1 (Array of objects)
    // worksInHospital: [
    //   {
    //     hospitalId: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "Hospital",
    //     },
    //     workingHours: {
    //       type: Number,
    //       required: true,
    //     },
    //   },
    // ],

    // way#2 (Defining miniSchema)
    worksInHospital: [worksInHospitalSchema]

  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
