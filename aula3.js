const inputs = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
function nameValidate(){
    if(inputs[0].value.length<3){
        // console.log('Nome deve ter 3 caracteres');
         setError(0);
    }
    else{
        removeError(0);
    }

function setError(index){
     spans[index].style.display = 'block';
}
function removeError(index){
     spans[index].style.display = 'none';
}
}

function passwordValidate1(){
    if(inputs[1].value.length<8){
        setError1(1);
    }
    else{
        removeError1(1);}

function setError1(index){
     spans[index].style.display = 'block';
}
function removeError1(index){
     spans[index].style.display = 'none';
}
}


function passwordValidate2(){
    if(inputs[2].value.length>=8 && inputs[1].value == inputs[2].value){
        removeError2(2)
        
    }
    else{
        setError2(2);
    }

function setError2(index){
     spans[index].style.display = 'block';
}
function removeError2(index){
     spans[index].style.display = 'none';
}
}