// Preguntar cuántas palabras ingresará el usuario
let cantidad = parseInt(prompt("¿Cuántas palabras deseas ingresar?"));

// Crear lista para guardar palabras
let listaPalabras = [];

// Pedir cada palabra
for (let i = 0; i < cantidad; i++) {

    let palabra = prompt("Ingresa la palabra " + (i + 1));
    listaPalabras.push(palabra);

}

// Convertir la lista a un string
let textoCompleto = listaPalabras.join("");

// FUNCIÓN EXPRESIVA (arrow function)
const contarVocales = (palabra) => {

    let vocales = ["a", "e", "i", "o", "u"];
    let cantidadVocales = 0;

    // recorrer cada carácter
    for (let letra of palabra.toLowerCase()) {

        if (vocales.includes(letra)) {
            cantidadVocales++;
        }

    }

    return cantidadVocales;
};

// invocar función
let total = contarVocales(textoCompleto);

// mostrar resultado
console.log("La cantidad total de vocales es: %d", total);