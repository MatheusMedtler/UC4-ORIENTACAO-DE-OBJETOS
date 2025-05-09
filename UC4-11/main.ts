import { level } from "./level";
import { survivor } from "./survivor";

let mySurvivor1 = new survivor()
let mySurvivor2 = new survivor(level.blue)

console.log(mySurvivor1.getlevel())
console.log(mySurvivor2.getlevel())