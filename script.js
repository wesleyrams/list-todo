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

    minhaLista.forEach((tarefa) => {
        novaLi = novaLi + `
        
         <li class="task">
                <img src="" alt="check-na-tarefa">

                <p>${tarefa}</p>

                <img src="" alt="tarefa-para-o-lixo">
            </li>
            `
        
    });

    listaFinal.innerHTML = novaLi 
    console.log(listaFinal)
}

button.addEventListener('click', pegarDados)

