const button = document.querySelector('.botao')
const input = document.querySelector('.input-task')
const listaFinal = document.querySelector('.list-task')

let minhaLista = []

function pegarDados() {
    minhaLista.push({
        tarefa: input.value,
        concluida: false
    })
    
    input.value = ''

    mostrarTarefas()
}


function mostrarTarefas() {
    let novaLi = ''

    minhaLista.forEach((item, index) => {
        novaLi = novaLi + `
        
         <li class="task ${item.concluida && "done"}" >
                <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">

                <p>${item.tarefa}</p>

                <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${index})">
            </li>
            `
        
    });

    listaFinal.innerHTML = novaLi 
}

function concluirTarefa(index) {
    minhaLista[index].concluida = !minhaLista[index].concluida

    mostrarTarefas()

}

function deletarItem(index) {
    minhaLista.splice(index, 1)
    mostrarTarefas()

}

button.addEventListener('click', pegarDados)

