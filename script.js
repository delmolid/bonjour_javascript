function sayHello (firstname,hour) {
let message = "Bonjour !"
message = "Bonjour" + " " + firstname + " " + "!"
if (hour >= 18){
  console.log("Bonsoir" + " " + firstname + " !")  
}
else {
console.log(message)
}
}
sayHello(`Beyonce`, 11);
sayHello(`Beyonce`, 18);
sayHello(`Beyonce`, 17);