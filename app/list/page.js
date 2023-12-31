import { connectDB } from "@/util/database"
import ListItem from "./ListItem"

export const dynamic = `force-dynamic`

const List = async () => {
  const client = await connectDB
  const db = client.db(`forum`)
  let result = await db.collection("post").find().toArray()

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  )
}

export default List
