import readlineSync from 'readline-sync';



const userName = function (){

console.log('Welcome to Brain Games! \n'); 
const name  = readlineSync.question('May I have your name? \n');
console.log('Hello ' + name +'!');

}
export default userName;
