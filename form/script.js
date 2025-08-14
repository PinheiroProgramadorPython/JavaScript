document.addEventListener("DOMContentLoaded", function () {
    let formulario = document.getElementById("form");
    let span_senha = document.getElementById("span_senha")
    let span_confsenha = document.getElementById("span_confsenha")
    let senha = document.getElementById("senha").value;
    let confSenha = document.getElementById("confsenha").value;
    formulario.addEventListener("submit", function (event) {
        event.preventDefault()
        // verificarDadosPreenchidos()
        // conferirSenha()
        if (verificarDadosPreenchidos() === true & conferirSenha() === true) {
            alert("Conta Criada com Sucess")
        }
    })

    function verificarDadosPreenchidos() {
        let errorMessage = document.querySelectorAll(".error-message");
        let tudoOk = true;
        for (let i = 0; i < errorMessage.length; i++) {
            if (formulario.children[i].children[1].value === "" || formulario.children[i].children[1].value === null) {
                errorMessage[i].style.display = 'inline-block';
                tudoOk = false;
            }
            else {
                errorMessage[i].style.display = 'none';
            }
        }
        console.log(tudoOk)
        return tudoOk;
    }

    function conferirSenha() {
        let senha = document.getElementById("senha").value;
        let confSenha = document.getElementById("confsenha").value;
        if (senha === confSenha) {
            span_senha.style.display = "none"
            span_confsenha.style.display = "none"
            console.log(true + " Senhas estão Iguais")
            return true
        }
        else {
            span_senha.textContent = "Senhas estão Diferentes"
            span_senha.style.display = "block"
            span_confsenha.textContent = "Senhas estão Diferentes"
            span_confsenha.style.display = "block"
            console.log(false + " Senhas estão Diferentes")
            return false
        }
    }

    function verificarDados() {
        let inputs = formulario.querySelectorAll("input,select");
        let tudoOk = true;
        for (let campo of inputs) {
            let errorMessage = campo.parentElement.querySelector('span[class="error-message"]')
            if (campo.value === "" || campo.value === null) {
                tudoOk = false;
                errorMessage.style.display = "block";
            }
        }
        console.log(tudoOk)
        return tudoOk;
    }
});
