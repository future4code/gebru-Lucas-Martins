//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

const bool1 = true
const bool2= false 
const bool3= !bool2

let resultado  = bool1 && bool2
//bool1 = true +bool2 = true
console.log("a. ", resultado)
//true+true = false
//a)false
//---------------------------------------------------------------------------------------------------------------------//
//resultado = bool1 && bool2 && bool3
//const bool1 = true + const bool2=false + const bool3=true
//console.log("b. ", resultado)
//true+false+true = false
//b)false
//---------------------------------------------------------------------------------------------------------------------//
//resultado = !resultado && (bool1 || bool2)
//resultado = true+bool1 = true ou boole 2 
//console.log("c.", resultado)
//const bool3=true+const bool1 = true +const bool2= false 
//c)true
//console.log("d. ", typeof resultado)
//booleanos