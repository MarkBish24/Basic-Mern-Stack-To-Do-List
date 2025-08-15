import mongoose from "mongoose";

// 1-create a schema
// 2- model based off of that schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
  },
  { timeStamps: true }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
