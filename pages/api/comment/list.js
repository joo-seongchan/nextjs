import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function (req, res) {
  console.log(req.query.id)
  const client = await connectDB
  const db = client.db(`forum`)
  let result = await db
    .collection("comment")
    .find({ parent: new ObjectId(req.query.id) })
    .toArray()
  res.status(200).json(result)
}
