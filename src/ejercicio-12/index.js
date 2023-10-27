if (true) {
    let variableDentroDelBloque = "Estoy dentro del bloque";
    console.log(variableDentroDelBloque);
}

try {
    console.log(variableDentroDelBloque); 
} catch (error) {
    console.log("Error:", error.message);
}




for (let i = 0; i < 1; i++) {
    let variableFor = "Dentro de for";
    console.log(variableFor);
}
try {
    console.log(variableFor);
} catch (error) {
    console.log("Error en for:", error.message);
}



let arr = [1];
for (let item of arr) {
    let variableForOf = "Dentro de for...of";
    console.log(variableForOf);
}
try {
    console.log(variableForOf);
} catch (error) {
    console.log("Error en for...of:", error.message);
}



let obj = { key: 1 };
for (let key in obj) {
    let variableForIn = "Dentro de for...in";
    console.log(variableForIn); 
}
try {
    console.log(variableForIn);
} catch (error) {
    console.log("Error en for...in:", error.message);
}



let arr2 = [1];
arr2.forEach(item => {
    let variableForEach = "Dentro de forEach";
    console.log(variableForEach); 
});
try {
    console.log(variableForEach);
} catch (error) {
    console.log("Error en forEach:", error.message);
}



let condicion = true;
while (condicion) {
    let variableWhile = "Dentro de while";
    console.log(variableWhile);  
    condicion = false; 
}
try {
    console.log(variableWhile);
} catch (error) {
    console.log("Error en while:", error.message);
}



let condicion2 = true;
do {
    let variableDoWhile = "Dentro de do...while";
    console.log(variableDoWhile);
    condicion2 = false;
} while (condicion2);
try {
    console.log(variableDoWhile);
} catch (error) {
    console.log("Error en do...while:", error.message);
}



let caso = 1;
switch (caso) {
    case 1:
        let variableSwitch = "Dentro de switch";
        console.log(variableSwitch);
        break;
}
try {
    console.log(variableSwitch);
} catch (error) {
    console.log("Error en switch:", error.message);
}