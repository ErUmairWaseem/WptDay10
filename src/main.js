
import {  } from "./umairdb.js";

async function main(){
 
  let jsonDocument = {
  message:"Hello guys", 
  to:"Umesh", 
  from:"Umair"
};

 let list = await readRecord();
console.log(list);
}
main();

