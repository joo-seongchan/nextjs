import { MongoClient } from "mongodb"
const url =
  "mongodb+srv://1:123@cluster0.dlr70f3.mongodb.net/?retryWrites=true&w=majority"
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }
