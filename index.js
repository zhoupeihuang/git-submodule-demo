const ModuleA = require("./ModuleA/modulea.json")

console.log(ModuleA)
ModuleA.map(it=>{
    console.log(it.name+"----"+it.age);
    
})