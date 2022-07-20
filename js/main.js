let montoCompra=parseInt(prompt("Monto de la compra"));
let preguntaCuotas=parseInt(prompt("Cantidad de cuotas"));
let alicuota=parseInt(prompt("Ingrese la alícuota de IVA que le corresponda:\n\n -21\n -10.5\n -0"));

function calcularCuotas (monto, cuotas) {
      
    let totalMes = 0;
    if (monto > 0) {
        totalMes = monto / cuotas;
    }
    const tasasIVA = [0, 10.5, 21];
    let totalMesMasIVA = 0;
    if (tasasIVA.includes(alicuota)){
        totalMesMasIVA = totalMes + (totalMes * (alicuota/100));
    } else {
        alert("Error al ingresar la alícuota")
    }
    return totalMesMasIVA;
}

console.log(calcularCuotas(montoCompra, preguntaCuotas));

let subtitulo = document.getElementById("explicacion");
subtitulo.innerHTML = "<h5>Este es un simulador de cuotas, en el cual usted debe ingresar el monto de su compra, luego la cantidad de cuotas en las que va a pagar el producto, y por último, la alícuota de IVA que le corresponda, siendo 21% para consumidores finales, 10,5% para determinados rubros o 0 si es IVA exento</h5>"


// Prueba para obtener el valor de los input y utilizarlos en una funcion para que devuelva el cálculo de cuotas y luego hacer un innerHTML agregando el resultado total abajo

// const resultadoTotal = () =>{
//     let montoCompra = parseInt(document.getElementById("monto-compra").value);
//     let preguntaCuotas = parseInt(document.getElementById("cuotas").value);
//     let alicuota = parseInt(document.getElementById("alicuota").value);
//     document.getElementById("resultadoTotal").innerHTML = function calcularCuotas (monto, cuotas){
//         let totalMes = 0;
//         if (monto > 0){
//             totalMes = monto / cuotas;
//         }
//         const tasasIVA = [0, 10.5, 21];
//         let totalMesMasIVA = 0;
//         if (tasasIVA.includes(alicuota)){
//             totalMesMasIVA = totalMes + (totalMes * (alicuota/100));
//         } else {
//             alert("Error al ingresar la alícuota");
//         }
//         return totalMesMasIVA;
//     };
//     console.log(resultadoTotal(montoCompra, preguntaCuotas));
// }