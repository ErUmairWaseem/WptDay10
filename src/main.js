
//Express JS
import  express, { application }  from "express";
const app = express();


//if you want sent some message 
function my(req , res){
   res.send("Hello...!!");
}
app.get("/my",my);


app.get("/main",(req, res) => {
  res.send("Hello Callback...!");
})

app.listen(4000);





