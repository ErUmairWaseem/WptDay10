import { MongoClient } from "mongodb";

async function insertRecord(jsonDocument) {
  const uri = "mongodb://127.0.0.1:27017";
 
  const client = new MongoClient(uri);

  const db = client.db("umairdb");
  const message = db.collection("message");

  //let jsonDocument = {message:"Hello World", to:"Umesh", from:"Umair"};
  await message.insertOne({jsonDocument});

  await client.close();
  console.log("Record Added");
}

async function readRecord() {
  const uri = "mongodb://127.0.0.1:27017";
 
  const client = new MongoClient(uri);

  //logic of raeding
  let db =client.db("umairdb");

  let message = db.collection("message");
  let list = await message.find().toArray();
  console.log(list);

  await client.close();
}

async function main(){
  let jsonDocument = {
  message:"Hello guys", 
  to:"Umesh", 
  from:"Umair"
};

 readRecord();

}
main();

