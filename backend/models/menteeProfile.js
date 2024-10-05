import mongoose from "mongoose";


const menteeProfileSchema = new mongoose.Schema({
  bio: { type: String },
  expertise: { type: String },
  // other mentor-specific fields...
});

const Mentee = mongoose.model("mentee", menteeProfileSchema);

export default Mentee;