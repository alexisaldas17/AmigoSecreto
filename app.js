// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista de amigos
let amigos = [];

// Método para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert("Este amigo ya está en la lista.");
        return;
    }

    amigos.push(nombreAmigo);
    actualizarLista();
    inputAmigo.value = ""; // Limpia el campo de texto
    inputAmigo.focus();
}

// Método para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar lista

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;

        // Botón para eliminar un amigo de la lista
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add('button-delete');
        botonEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(botonEliminar);
        listaAmigos.appendChild(li);
    });
}

// Método para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

// Método para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes añadir al menos dos amigos para realizar el sorteo.");
        return;
    }

    // Realizar el sorteo
    const amigosSorteados = [...amigos];
    const resultados = [];
    let valido = false;

    while (!valido) {
        // Mezclar la lista de amigos
        amigosSorteados.sort(() => Math.random() - 0.5);

        // Verificar que ningún amigo se asigne a sí mismo
        valido = amigos.every((amigo, i) => amigo !== amigosSorteados[i]);
    }

    amigos.forEach((amigo, i) => {
        resultados.push(`${amigo} le regala a ${amigosSorteados[i]}`);
    });

    // Mostrar resultados
    mostrarResultados(resultados);
}

// Método para mostrar los resultados en la interfaz
function mostrarResultados(resultados) {
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = ""; // Limpiar lista

    resultados.forEach(resultado => {
        const li = document.createElement('li');
        li.textContent = resultado;
        resultadoLista.appendChild(li);
    });
}
