
//Express JS
import  express, { application }  from "express";
const app = express();

// let main = () => {
//   return "Hello";
// }


//if you want sent some message 
let main = (req , res) => {
   res.send("Hellooouuuu...!!");
}

app.get("/main",main)

app.listen(4000);




// async function main() {
 
//   return "Hello World";

// }



