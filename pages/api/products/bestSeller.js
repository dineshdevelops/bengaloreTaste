// import dbConnect from "../../../util/mongo";
// import Product from "../../../models/Product";

// export default async function handler(req, res) {
//   const { method } = req;
//   dbConnect();
//   if (method === "GET") {
//     try {
//       const products = await Product.find({bestSeller: true });
//       res.status(200).json(products);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   }
//   if (method === "POST") {
//     try {
//       const product = await Product.create(req.body);
//       res.status(200).json(product);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   }
// }
import clientPromise from "../../../lib/mongodb";
export default async function handler(req,res) {
  const client =await clientPromise
  const db = client.db("test");
  const data = await db.collection("products").find({bestSeller: {$eq: true}}).toArray();
  res.json(data)
}