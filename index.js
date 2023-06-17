let numero = prompt("Ingrese un número =) :");


if (numero == 55) {
    console.log("Encontraste el número secreto");
} else if (numero < 0) {
  console.log("El número es negativo");
} else if (numero > 0) {
  console.log("El número es positivo");
} else {
  console.log("El número es cero");
}


for (let i = 1; i <= 10; i++) {
    console.log(i); 
  }

  console.log("Simulador Interactivo");

// Variables para las horas y el dinero
let sumaDinero = 0;
let sumaHoras = 0;

alert ("Las opciones se encuentran en la consola, para abrir la consola por favor aprete F12 y dirijase a donde dice console")
// Función para agregar un caso
function agregarCaso() {
  // Opciones
  console.log("Opciones:");
  console.log("1 - Caso 1: Sumar 30$ y 2 hs");
  console.log("2 - Caso 2: Sumar 45$ y 3 hs");
  console.log("3 - Caso 3: Sumar 60$ y 4 hs");
  console.log("0 - Salir");

  // Obtener la opción elegida por el usuario
  let opcion = prompt("Ingrese el número de caso (1, 2, 3 o 0 para salir):");

  // Verificar la opción elegida
  switch (opcion) {
    case "1":
      sumaDinero += 30;
      sumaHoras += 2;
      break;
    case "2":
      sumaDinero += 45;
      sumaHoras += 3;
      break;
    case "3":
      sumaDinero += 60;
      sumaHoras += 4;
      break;
    case "0":
      return; // Se sale del simulador
    default:
      console.log("Opción inválida");
      break;
  }

  // Mostrar los resultados hasta ahora 
  console.log("Suma de dinero: " + sumaDinero);
  console.log("Suma de horas: " + sumaHoras);

  // Preguntar al usuario si quiere agregar otro caso
  let continuar = prompt("¿Desea agregar otro caso? (Sí = s / No = n):");
  if (continuar.toLowerCase() === "s") {
    agregarCaso(); 
  }
}

// Llamar a la función para agregar el primer caso
agregarCaso();