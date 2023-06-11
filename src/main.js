import { MongoClient } from "mongodb";

async function insertRecord() {
  const uri = "mongodb://127.0.0.1:27017";
  // open the connection
  const client = new MongoClient(uri);

  const db = client.db("umairdb");
  const message = db.collection("message");

  let jsonDocument = {message:"Hello World", to:"Umesh", from:"Umair"};
  await message.insertOne({jsonDocument});

  // close the connection
  await client.close();
  console.log("Record Added");
}

async function main(){
await insertRecord();

}
main();

