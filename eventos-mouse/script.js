const parag = document.getElementById("parag")
const input = document.getElementById("input")

function mouseOver(){
    if(parag.style.color == "black"){
        parag.style.color = "red"
    } else{
       parag.style.color = "black" 
    }   
}


function clickMouse(){
    alert("Vc Clicou em Mim! Safadinho")
}

function onFocus(){
    input.placeholder = "Estou em FocUssss"
    input.style.backgroundColor = "green"
    input.style.color = "wite"
}

function onBlur(){
    input.placeholder = "Estou sem FocUssss"
    input.style.backgroundColor = "yellow"
}
