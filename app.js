const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonigual = document.getElementsByName('data-igual')[0];
const botondelete = document.getElementsByName('data-delete')[0];

let result = document.getElementById('result');
let opeActual = '';
let operAnterior = '';
let operacion = undefined;


botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarnumero(boton.innerText);

    });
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    });
});
botonigual.addEventListener('click',function(){
    calcular();
    actualizardisplay();
});
botondelete.addEventListener('click', function(){
    clear();
    actualizardisplay();
});

function agregarnumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizardisplay();

}

function actualizardisplay(){
    result.value = opeActual;
}

function selectOperacion(op){
    if(opeActual === '')return;
    if(operAnterior !== ''){
        calcular();
    }
    operacion = op.toString();
    operAnterior = opeActual;
    opeActual = '';
}

function calcular(){
    let calculo;
    const anterior = parseFloat(operAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;


    }
    opeActual = calculo;
    operacion = undefined;
    operAnterior = '';
    
    
}


function clear(){
    opeActual = '';
    operAnterior = '';
    operacion = undefined;

}

clear();
