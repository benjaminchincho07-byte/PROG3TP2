const meriendas = [
    "Tostado de jamón y queso",
    "Café con medialunas",
    "Licuado de banana",
    "Té con galletitas",
    "Yogur con cereales"
];

const listaMeriendas = document.getElementById("listaMeriendas");
const btnContar = document.getElementById("btnContar");
const resultadoConteo = document.getElementById("resultadoConteo");

if (listaMeriendas) {
    meriendas.forEach(function(merienda) {
        const div = document.createElement("div");
        div.classList.add("item");
        div.textContent = merienda;
        listaMeriendas.appendChild(div);
    });

    btnContar.addEventListener("click", function() {
        resultadoConteo.textContent = "Cantidad de meriendas: " + meriendas.length;
    });
}

const tarjetas = document.querySelectorAll(".tarjeta");
const contadorSeleccionadas = document.getElementById("contadorSeleccionadas");

if (tarjetas.length > 0) {
    tarjetas.forEach(function(tarjeta) {
        tarjeta.addEventListener("click", function() {
            tarjeta.classList.toggle("seleccionada");

            const seleccionadas = document.querySelectorAll(".seleccionada");
            contadorSeleccionadas.textContent = "Tarjetas seleccionadas: " + seleccionadas.length;
        });
    });
}

const elementos = [
    { nombre: "Manzana", categoria: "fruta" },
    { nombre: "Banana", categoria: "fruta" },
    { nombre: "Galletitas", categoria: "merienda" },
    { nombre: "Tostado", categoria: "merienda" },
    { nombre: "Pera", categoria: "fruta" },
    { nombre: "Café", categoria: "bebida" }
];

const listaElementos = document.getElementById("listaElementos");
const btnTodos = document.getElementById("btnTodos");
const btnFrutas = document.getElementById("btnFrutas");

function mostrarElementos(lista) {
    listaElementos.innerHTML = "";

    lista.forEach(function(elemento) {
        const div = document.createElement("div");
        div.classList.add("item");
        div.textContent = elemento.nombre + " - " + elemento.categoria;
        listaElementos.appendChild(div);
    });
}

if (listaElementos) {
    mostrarElementos(elementos);

    btnTodos.addEventListener("click", function() {
        mostrarElementos(elementos);
    });

    btnFrutas.addEventListener("click", function() {
        const frutas = elementos.filter(function(elemento) {
            return elemento.categoria === "fruta";
        });

        mostrarElementos(frutas);
    });
}