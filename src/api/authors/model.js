import mongoose from "mongoose";
const { Schema, model } = mongoose;

const authorsSchema = new Schema({
  name: { type: String, required: true },
  avatar: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["User", "Admin"], default: "User" },
});

export default model("Author", authorsSchema);
// {
//     "_id": "MONGO GENERATED ID",
//     "category": "ARTICLE CATEGORY",
//     "title": "ARTICLE TITLE",
//     "cover":"ARTICLE COVER (IMAGE LINK)",
//     "readTime": {
//       "value": Number,
//       "unit": "minute"
//     },
//     "author": {
//       "name": "AUTHOR NAME",
//       "avatar":"AUTHOR AVATAR LINK"
//     },
//     "content": "HTML",
//     "createdAt": "DATE",
//   "updatedAt": "DATE"
// }
