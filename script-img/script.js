const botao = document.getElementById("button")
const img = document.getElementById("img")

function changeImage(){
    if(img.src.includes("img/imagem1.png")){
        img.src = "img/Eu mais Novo.png"
    } else  {
        img.src = "img/imagem1.png"
    }   
}
