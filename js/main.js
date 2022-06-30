let ingresarPiso = prompt("Ingrese el número del piso al que desea ir");

while (ingresarPiso != "LLENO" || ingresarPiso != "lleno"){
    if (ingresarPiso <= 10 && ingresarPiso != 8){
        alert("Usted está en el piso "+ ingresarPiso);
    } else if (ingresarPiso == 8){
        alert("Este piso se encuentra en construcción");
    } else {
        alert("El piso seleccionado no existe");
    }
    ingresarPiso = prompt("Ingrese el número del piso al que desea ir");
}

