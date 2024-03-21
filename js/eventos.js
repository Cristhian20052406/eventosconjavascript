const platosPeruanos = [
    {
        nombre: "Ceviche",
        departamento: "Lima",
        calificacion: 9
    },
    {
        nombre: "Lomo Saltado",
        departamento: "Lima",
        calificacion: 10
    },
    {
        nombre: "Pollo a la brasa",
        departamento: "Cusco",
        calificacion: 8
    },
    {
        nombre: "Aji de Gallina",
        departamento: "Lima",
        calificacion: 10
    },
    {
        nombre: "Causa Limeña",
        departamento: "Lima",
        calificacion: 10
    },
    {
        nombre: "Cuy chactado",
        departamento: "Cusco",
        calificacion: 4
    }
];

const comidaElement = document.getElementById("platoscomida");
let contenido = "";
platosPeruanos.forEach(function (platos) {
    let calificacion = platos.calificacion;
    let claseicon = "";

    if (calificacion === 10) {
        claseicon = "verde";
    } else if (calificacion >= 5 && calificacion < 10) {
        claseicon = "amarillo";
    } else if (calificacion < 5) {
        claseicon = "rojo";
    }

    const template = `
        <div class="platos">
            <div class="icon icon-${claseicon}"> <div class="calificacion">
            ${platos.calificacion}
        </div></div>
            <div class="data">
                <h4>${platos.nombre}</h4>
                <p>Originario de: ${platos.departamento}</p>
            </div>
        </div>
        `;
    contenido = contenido + template;
});

comidaElement.innerHTML = contenido;
