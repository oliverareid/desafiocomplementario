function calcular (montoTotal, totalPagado) {
      
    var total = 0;
    if (totalPagado && totalPagado > 0) {
        total = montoTotal - totalPagado;
    }

     var tipoDeCuota = 24;
     var totalMes = total / 24;
     var totalMesMasImpuestos = totalMes + (totalMes * 0.05);
}
