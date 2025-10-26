let numeros = [1, 2, 3, 4, 5];

let dobles = numeros.map(n => n * 2);
console.log("Dobles:", dobles);

let pares = numeros.filter(n => n % 2 === 0);
console.log("Pares:", pares);

let sumaTotal = numeros.reduce((acum, n) => acum + n, 0);
console.log("Suma total:", sumaTotal);
