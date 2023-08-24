import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function (req, res) {
  if (req.method == `POST`) {
    const session = await getServerSession(req, res, authOptions)
    const data = {
      content: req.body.comment,
      parent: new ObjectId(req.body._id),
      author: session.user.email,
    }
    console.log(session)
    console.log(data)
    const client = await connectDB
    const db = client.db(`forum`)
    let result = await db.collection("comment").insertOne(data)
    res.status(200).json(`저장완료`)
  }
}
