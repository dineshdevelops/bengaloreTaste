// import dbConnect from "../../../util/mongo";
// import Product from "../../../models/Product";

// export default async function handler(req, res) {
//   const {
//     method,
//     query: { id },
//   } = req;
//   dbConnect();
//   if (method === "GET") {
//     try {
//       const product = await Product.findById(id);
//       res.status(200).json(product);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   }
//   if (method === "PUT") {
//     try {
//       const product = await Product.findByIdAndUpdate(id,req.body,{
//         new: true,
//       });
//       console.log("FROM DB");
//       console.log(product)
//       res.status(200).json(product);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   }
// }
import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";
export default async function handler(req, res) {
  const {id} = req.query;
  const client =await clientPromise
  const db = client.db("test");
  const data = await db.collection("products").findOne({_id: new ObjectId(id)});
  //console.log(data)
  res.json(data);
}
