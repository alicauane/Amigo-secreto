//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [ ];

function adicionarAmigo() {
    let adicionando = document.getElementById('amigo'); 
    let nome = adicionando.value.trim();
    if (nome === ''){
        alert('Por favor, insira um nome.');
        return
    }
    amigos.push(nome);// adiciona ao array
    atualizarLista();
    adicionando.value = '';
    
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
    
}

function sortearAmigo() {
    if (amigos.length === 0){
        alert ('adicionando pelo menos um amigo antes de sortear!');
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    document.getElementById('listaAmigos').style.display = 'none';
    document.getElementById('resultado').innerHTML = `o amigo secreto sorteado é: ${amigoSorteado}`;


}