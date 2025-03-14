// window.alert("Ola Mundo!"); ->

// window.confirm("voce gosta de pamonha?"); ->recebe ok ou cancelar

// window.prompt("Qual seu nome?"); ->

//let x = BigInt("1945"); //->variavel

//console.log(typeof"x"); //->traz o tipo de dado
//console.log("x"); // ->print

//let y = 10/3;
//let w = (y.toFixed(2)); ->duas casas
//console.log(w)
//console.log(w.replace(".",","));-.substitui

//let nome = ("Farbo");
//console.log("meu nome é" + nome); //->concatena usando +
//console.log(`meu nome é ${nome}`); //->concatena com crase

//var nome = window.prompt("qual seu nome?")
//window.alert("ola"+ nome + "seja bem vindo")

//var media =8;
//console.log(media >= 7 ? 'aprovado' : 'reprovado');

//let text= "abcdefghijklmnopqrstuvwxyz";
//let tamanho = text.length;
//console.log(tamanho);

//let text = "hello world";
//let char = text.charAt(7);
//console.log(char);

// let text = "apple,banana,kiwi";
// let part = text.slice(6,12);
// console.log(part);

// let text = "hello world";
// let text2 = text.toUpperCase();->MAIUSCULO
// console.log(text2);

//parseInt->converte pra inteiro
//parseFloat->converte pra float

let n1;
let n2;


function Calculo(n1,n2){
    return n1 * n2; 
}

console.log(Calculo(10,20));