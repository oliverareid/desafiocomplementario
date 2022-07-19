let montoCompra=parseInt(prompt("Monto de la compra"));
let preguntaCuotas=parseInt(prompt("Cantidad de cuotas"));
let alicuota=parseInt(prompt("Ingrese la alícuota de IVA que le corresponda:\n\n1 -21\n2 -10.5\n3 -0)"));

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

