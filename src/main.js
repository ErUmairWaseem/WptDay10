import {MongoClient} from "mongodb";
import  express, { application, request }  from "express";
const app = express();


//if you want sent some message 
async function main(req , res){
  const uri = "mongodb://127.0.0.1:27017"
  const client = new MongoClient(uri);

  //get the DB
  const db = client.db("umeshdb");
  const messageCollection = db.collection("message")

  //write a data and store in inputdocument
  let message = req.query.message;
  let inputDocument = {message: message};
  

  //add message
  await messageCollection.insertOne(inputDocument);

  await client.close();

  //return statement
  res.send("Record added");
}

async function findAllMessage(req, res) {
  const uri = "mongodb://127.0.0.1:27017"
  const client = new MongoClient(uri);

  //get the DB
  const db = client.db("umeshdb");
  const messageCollection = db.collection("message");

  let list = await messageCollection.find().toArray();

  await client.close();

  res.send(list);

}

app.get("/main",main);
app.get("/find",findAllMessage);


app.listen(4000);





