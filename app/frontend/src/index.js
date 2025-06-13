
import {Calculator} from "../wailsjs/go/main/App.js";

let equal = document.querySelector("#equal")

function test(){
const result = Calculator("1 + 1")
console.log(result.then((result)=>{
  console.log(result)
  }))
}
equal.addEventListener("click",test)

