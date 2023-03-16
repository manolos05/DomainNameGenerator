/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#generar").innerHTML = domain();
  });
};

const domain = () => {
  let pronoun = ["the", "our", "your"];
  let adj = ["great", "big", "small"];
  let noun = ["jogger", "racoon", "dog"];
  let dot = [".cl", ".us", ".com", ".net"];
  var hola = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let e = 0; e < noun.length; e++) {
        for (let x = 0; x < dot.length; x++) {
          hola += pronoun[i] + adj[j] + noun[e] + dot[x] + "<br>";
          console.log(
            pronoun[i]
              .concat(adj[j])
              .concat(noun[e])
              .concat(dot[x])
          );
        }
      }
    }
  }
  return hola;
};
