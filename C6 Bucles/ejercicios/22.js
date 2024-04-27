function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
 let i = 0;
 let valor = num;
  do {
    i = i + 1;
    valor += 5;  
  } while (i < 8);
  return valor;
}

module.exports = doWhile;