document.addEventListener("DOMContentLoaded", function(){
    const tela = document.getElementById("tela")
    const num = document.getElementById("num")
    const botao = document.getElementById("botao")
     
    botao.addEventListener("click",function(){
        let inicio = Number(document.getElementById("inicio").valueAsNumber)
        let passo = Number(document.getElementById("passo").valueAsNumber)
        let final = Number(document.getElementById("fim").valueAsNumber)

        if(isNaN(inicio)){inicio = 0; document.getElementById("inicio").value = 0}
        if(isNaN(final)){final = 10; document.getElementById("fim").value = 10}

        if(isNaN(passo) || passo === 0){
            passo = 1; document.getElementById("passo").value = 1
        }
        else{
            passo = Math.abs(passo)       
        }
        document.getElementById("passo").value = passo
          
        
        tela.style.visibility = "visible"
        botao.disabled = true
        if (inicio < final) {
            for(let i = 0, atual = inicio; atual <= final; atual += passo, i++){                
                setTimeout(function(){
                    num.innerText = atual
                    if(atual + passo > final){
                    botao.disabled = false; setTimeout(function(){
                    num.innerText = "FIM"}, 500)}          
                },500*i)          
            }         
        }
        else {
            for(let i = 0, atual = inicio; atual >= final; atual -= passo, i++){                
                setTimeout(function(){
                    num.innerText = atual
                    if(atual - passo < final){
                    botao.disabled = false; setTimeout(function(){
                        num.innerText = "FIM"}, 500)}          
                },500*i)          
            }         
        }                                       
    })
})
