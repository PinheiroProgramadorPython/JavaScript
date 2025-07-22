const input = document.getElementById("input")
const tela = document.getElementById("tela")
const list = tela.querySelector("ul")

function addTask(){
    if(input.value !== ""){
        let li = document.createElement("li")
        li.textContent = input.value
        list.appendChild(li)
        let button = document.createElement("button")  
        button.textContent = "Remover Item"
        li.appendChild(button)
        button.addEventListener("click", function(){list.removeChild(li)})
        input.value = ""
    } else {
        alert("Escreva uma Tarefa para Adicionar a Lista de Tarefas")
    }
}
