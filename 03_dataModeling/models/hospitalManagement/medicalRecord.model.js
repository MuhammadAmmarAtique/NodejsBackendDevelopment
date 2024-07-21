import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
    diagnosis: {
      type: String,
      required: true,
    },
    symptoms: {
      type: String,
      required: true,
    },
    treatment: {
      type: String,
      required: true,
    },
    medication: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);
