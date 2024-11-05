function esNumeroPrimo(numero){

    if( typeof numero !== 'number' || !Number.isInteger ( numero ) || numero <= 1 ){
        console.log(" Por favor ingrese un número entero positivo mayor que 1.");
        return;
    }

    for (let i = 2; i < numero; i++) {
        
        if ( numero % i === 0 ) {
            console.log("El numero " + numero + " no es primo.");
            break;
        } else {
            console.log("El número " + numero + " sí es primo.");
            break;
        }
    }


}
esNumeroPrimo(6);
esNumeroPrimo(7);
esNumeroPrimo(9);