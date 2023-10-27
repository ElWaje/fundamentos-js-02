let automovil = {
    marca: "Tesla",
    modelo: "Model 3",
    año: 2022,
    color: "rojo",
    tipo: "eléctrico"
};

for (let caracteristica in automovil) {
    console.log(caracteristica + ": " + automovil[caracteristica]);
}
