const prompt = require("prompt-sync")({sigint: true});

//input data firt number -> const (var) numb1
const num1 = prompt("Enter a first number: ");
//input data second number -> const (var) numb1
const num2 = prompt("Enter a second number: ");

//print informasi
console.log("first number + second number = ");

//perhitungan penjumlahan
//convert ke number/int/float untuk melakukan penjumlahan angka
console.log(Number(num1) + Number(num2));
