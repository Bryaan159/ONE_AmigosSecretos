// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declaración de variables
let listAmigos = [];

//Funciones
function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if(nombreAmigo === ""){
        alert("El nombre que esta ingresando se encuentra vacio");
        return;
    }

    if(listAmigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo} ya esta en la lista`)
        return;
    }
    listAmigos.push(nombreAmigo);

    console.log(listAmigos)

    inputAmigo.value = "";

    actualizarLista();
}

function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');
    
    listaAmigos.innerHTML = "";

    for(let i = 0; i<listAmigos.length;i++){
        const liHTML = document.createElement('li');
        liHTML.textContent = listAmigos[i];
        listaAmigos.appendChild(liHTML);
    }
}


// Funcion para sortear un amigo
function sortearAmigo(){
    if(listAmigos.length === 0){
        alert("No hay amigos los cuales se puedan sortear")
    }
    const numeroAleatorio = Math.floor(Math.random()* listAmigos.length);

    const amigoSorteado =  listAmigos[numeroAleatorio];
    
    //mostrar los resultados
    const respuesta = document.getElementById('resultado');
    respuesta.innerHTML = `Amigo sorteado:<strong>${amigoSorteado}</strong>`
}