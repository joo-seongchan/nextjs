import { connectDB } from "@/util/database"
import bcrypt from "bcrypt"

export default async function handler(req, res) {
  if (req.method == `POST`) {
    const client = await connectDB
    let hash = await bcrypt.hash(req.body.password, 10)
    req.body.password = hash

    const db = client.db(`forum`)
    await db.collection(`user_cred`).insertOne(req.body)
    res.status.Json(`가입성공`)
  }
}
