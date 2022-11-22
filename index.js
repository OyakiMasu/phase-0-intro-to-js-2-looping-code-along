// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
  //  console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
//}
/*const names = [Guadalupe, Ollie, Aki]
function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]} for the wonderful ${event} gift!`);
  return names;
  }
}
*/
const names = ["Guadalupe,", ",OLlie,", ",Aki"]
function writeCards(name, event) {
    const array = []
    for (let i = 0; i < name.length; i++) {
        array.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return array;
}
function countDown(number) {
    while (number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}