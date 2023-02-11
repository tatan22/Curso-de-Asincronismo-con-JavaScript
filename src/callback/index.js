function sum(num1, num2) {
    return num1 + num2;
}

function calc (num1, num2, callback) {
    return callback(num1, num2);
};

// function calc (num1, num2, nombre_funcion) {
//     return nombre_funcion(num1, num2);
// };

console.log(calc(2, 2, sum))

//------------------ SetTimeOut

setTimeout (function (){
    console.log('Hola, Mundo!')
}, 5000)

//Con una funcion no anonima
function gretting(name) {
    console.log(`Hola ${name}`)
}
setTimeout (gretting, 2000, 'Jhonatan')
