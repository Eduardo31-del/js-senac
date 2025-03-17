//condiçao com javascript

// let idade = 18;

// if (idade >= 18){
//     console.log("maior de idade");
// }
// else{
//     console.log("menor de idade");
// }

//else if
// let idade = 16;
// if (idade <= 16){
//     console.log("Adolescente");
// }
// else if(idade > 16 && idade < 42){
//     console.log("Adulto");
// }
// else{
//     console.log("Idoso");
// }

// let menu = 0;

// switch(menu){
//     case 0:
//         window.alert("sair")
//         break;
//     case 1:
//         window.alert("Saldo")
//         break;
//     default:
//         window.alert("Valor Invalido")
// }

// switch(new Date().getDay()){
//     case 0:
//         day = "Domingo";
//         break;
//     case 1:
//         day = "Segunda";
//         break;
// }
// window.alert(day)

//LOOP ->while
// var i = 0
// while(i<10){
//         var text;
//     text = "O numero é " + i;
//     console.log(text)
//     i++
// }

// do{
//     var i = 10;
//     text = "The number is " + i;
//     i++;
// } 
// while (i<10);

//lopp->for

// for(var i = 0; i < 9; i++){
//     console.log(i);
// }

//DOM

var a = window.document.getElementById("a")
    a.addEventListener('click',x())
    function x(){
        a.innerText = 'Clicou'
        window.alert('Certa Resposta')
    }

   