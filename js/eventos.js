const platosPeruanos = [
    {
        nombre: "Ceviche",
        departamento: "Lima",
        calificacion: 9,
        isFavorite: false
    },
    {
        nombre: "Lomo Saltado",
        departamento: "Lima",
        calificacion: 10,
        isFavorite: false

    },
    {
        nombre: "Pollo a la brasa",
        departamento: "Cusco",
        calificacion: 8,
        isFavorite: false

    },
    {
        nombre: "Aji de Gallina",
        departamento: "Lima",
        calificacion: 10,
        isFavorite: false

    },
    {
        nombre: "Causa Limeña",
        departamento: "Lima",
        calificacion: 10,
        isFavorite: false

    },
    {
        nombre: "Cuy chactado",
        departamento: "Cusco",
        calificacion: 4,
        isFavorite: false
    }
];

function asignarComida(){
const comidaElement = document.getElementById("platoscomida");
let contenido = "";
platosPeruanos.forEach(function (platos) {
    let calificacion = platos.calificacion;
    let claseicon = "";
    let favorita = "No es mi comida favorita";

    if (calificacion === 10) {
        claseicon = "verde";
    } else if (calificacion >= 5 && calificacion < 10) {
        claseicon = "amarillo";
    } else if (calificacion < 5) {
        claseicon = "rojo";
    }

    if(favorita === true){
        favorita  = "Es mi comida favorita";
    }

    const template = `
        <div class="platos">
            <div class="icon icon-${claseicon}"> <div class="calificacion">
            ${platos.calificacion}
        </div></div>
            <div class="data">
                <h4>${platos.nombre}</h4>
                <p>Originario de: ${platos.departamento}</p>
                <h4>${favorita}</h4>
        </div>
            </div>
        </div>
        `;
    contenido = contenido + template;
});

comidaElement.innerHTML = contenido;
}

asignarComida();


const boton = document.getElementById("sendComida");

boton.addEventListener("click", function(){
    const nombre = document.getElementById("nombreComida").value;
    const departamento = document.getElementById("departamentoComida").value;
    const calificacion = document.getElementById("calificacionComida").value;
    const isFavorite = document.getElementById("isFavorita").value;    
    let isDishFavorite = true;
    if (isFavorite == "NO") {
        isDishFavorite = false;
    }

    const newDish = new Object();
    newDish.nombre = nombre;
    newDish.departamento = departamento;
    newDish.calificacion = calificacion;    
    newDish.isFavorite = isDishFavorite;
    platosPeruanos.push(newDish);
    alert("Has agregado un nuevo plato");

    asignarComida();
});