// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let participante = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
    
    if (!nombreAmigo) {
    alert("Debes ingresar un nombre");
    return;
    }

    if (!/^[a-zA-Z]+$/.test(nombreAmigo)) {
        alert("El nombre solo puede contener letras");
        return;

    }

    if (participante.length >= 6) {
        alert("La cantidad de participantes debe ser menor a 6");
        return;
    }

participante.push(nombreAmigo);
inputAmigo.value = "";
inputAmigo.focus();
mostrarAmigos();
}

function mostrarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
        
        for (let i = 0; i < participante.length; i++) {
            let item = document.createElement("li");
            item.textContent = participante[i];
            listaAmigos.appendChild(item);
        }
}

function sortearAmigo() {
    if (participante.length === 0) {
        alert("Debes ingresar al menos tres amigos");
        return;
    }

    let amigosSecretos = [];
    let participantes = [...participante];

    for (let i = 0; i < participante.length; i++) {
        let indice = Math.floor(Math.random() * participantes.length);
        let amigoSecreto = participantes[indice];
        amigosSecretos.push(amigoSecreto);
        participantes.splice(indice, 1);
    }

let resultado = document.getElementById("resultado");
resultado.innerHTML = "";

for (let i = 0; i < participante.length; i++) {
    resultado.innerHTML += `<li>${participante[i]} es el amigo secreto de ${amigosSecretos[i]}</li>`;
}
}



