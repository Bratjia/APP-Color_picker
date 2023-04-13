const color = document.querySelector("#color");
const salida = document.querySelector("#salida");
const lista = document.querySelector("#list");
const number = document.querySelector("#colors");

const storage =localStorage.getItem("colorValue")|| "#ffffff";
const colorList = localStorage.getItem("colorList") || [];