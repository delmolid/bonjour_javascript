function sayHello (firstname,hour) {
let sayName =prompt(firstname)
let message = "Bonjour !" 
message = "Bonjour" + " " + sayName + " " + "!";
document.querySelector('h1').innerText = message;
 // if (hour >= 18){
 //  console.log("Bonsoir" + " " + firstname + " !")  
 // }
 // else {
// console.log(message)
// }
}
sayHello("")
