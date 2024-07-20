import mongoose from "mongoose";

const todosSchema = new mongoose.Schema(
  { 
    content: { //title
      type: String,
      required: true,
    },
    complete: { //jab saraay subtodos complete hojaingy tooh main todo automatically check hojaiy ga
      type: Boolean,
      default: false,
    },
    createdBy: { //Relationship #1
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodos: [ //subTodos is an array of objects, where each object is a subtodo
      {
        //Relationship #2
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todosSchema);
