const button = document.querySelector('.botao')
const input = document.querySelector('.input-task')
const listaFinal = document.querySelector('.list-task')

let minhaLista = []

//Pega todos inputs digitados de minhaLista
function pegarDados() {
    minhaLista.push({
        tarefa: input.value,
        concluida: false
    })
    
    input.value = ''

    mostrarTarefas()
}

// Ao adicionar tarefa no input, essa função mostra todas as tarefas adicionadas
function mostrarTarefas() {
    let novaLi = ''

    // Aqui é aonde pega toda tarefa de "minhaLista e add no novaLi"
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

// Função para dizer que a tarefa está concluida ao clicar na imagem
function concluirTarefa(index) {
    minhaLista[index].concluida = !minhaLista[index].concluida

    mostrarTarefas()

}

// Aqui deleto as tarefas
function deletarItem(index) {
    minhaLista.splice(index, 1)
    mostrarTarefas()

}

// Pego os dados ao clicar no botão
button.addEventListener('click', pegarDados)

