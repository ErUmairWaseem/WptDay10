
//Express JS
import  express, { application }  from "express";
const app = express();




//if you want sent some message 
function main(req , res){
   res.send("Hellooouuuu...!!");
}
app.get("/main",main)



function first(req,res) {

  //write logic here
  res.send("My Name is Umair")
}
app.get("/first",first)


function second(req,res) {
  res.send("CDAC Mumbai(Kharghar)");
}app.get("/second", second)







app.listen(4000);





