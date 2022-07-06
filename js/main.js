function calcularCuotas (monto, cuotas) {
      
    let totalMes = 0;
    if (monto > 0) {
        totalMes = monto / cuotas;
    }
    let totalMesMasIVA = totalMes + (totalMes * 0.21);
    return totalMesMasIVA;
}
