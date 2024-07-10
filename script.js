const button = document.querySelector('.botao')
const input = document.querySelector('.input-task')
const listaFinal = document.querySelector('.list-task')

let minhaLista = []

function pegarDados() {
    minhaLista.push(input.value)

    mostrarTarefas()
}


function mostrarTarefas() {
    let novaLi = ''

    minhaLista.forEach((tarefa, index) => {
        novaLi = novaLi + `
        
         <li class="task">
                <img src="" alt="check-na-tarefa">

                <p>${tarefa}</p>

                <img src="" alt="tarefa-para-o-lixo" onclick="deletarItem(${index})">
            </li>
            `
        
    });

    listaFinal.innerHTML = novaLi 
}

function deletarItem(index) {
    minhaLista.splice(index, 1)
    mostrarTarefas()

}

button.addEventListener('click', pegarDados)

