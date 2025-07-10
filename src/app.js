import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.net', '.us', '.io']

let pronoun2 = Math.floor(Math.random() * pronoun.length)
let adj2 = Math.floor(Math.random() * adj.length)
let noun2 = Math.floor(Math.random() * noun.length)
let extension2 = Math.floor(Math.random() * extension.length)  


console.log(`${pronoun[pronoun2]}${adj[adj2]}${noun[noun2]}${extension[extension2]}`)
};
