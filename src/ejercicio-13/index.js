function contadorClosures() {
    let contador = 0; 
    return function() {
        contador++;
        return contador;
    }
}


let miContador = contadorClosures();

console.log(miContador()); 
console.log(miContador()); 
console.log(miContador());
