document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("form");
    const erroName = document.getElementById("error-name");
    const name = document.getElementById("name");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault()
        if (!name.value) {
            erroName.style.display = "inline-block";
        } else {
            erroName.style.display = "none";
        }

        const nome = name.value
        const resultado = document.getElementById("resultado");
        const peso = parseFloat(document.getElementById("peso").value);
        const altura = parseFloat(document.getElementById("altura").value);
        let imc = peso / (altura * altura);
        let categoria;

        if (imc < 18.5) {
            categoria = "Abaixo do Peso"
            resultado.style.backgroundColor = "#ffff00"
        } else if (imc < 25) {
            categoria = "Peso Normal"
            resultado.style.backgroundColor = "#00ff00"
        } else if (imc < 30) {
            categoria = "Sobrepeso"
            resultado.style.backgroundColor = "#ffa500"
        } else {
            categoria = "Obesidade"
            resultado.style.backgroundColor = "#ff0000"
        }

        resultado.innerHTML = `<p>${nome} seu IMC é de: ${imc.toFixed(2)}</p>
        <p>Você esta na Categoria: ${categoria}</p>`

        document.getElementById("categoria").value = categoria

        let dados = new FormData(formulario)
        for (let [chave, valor] of dados.entries()) {
            console.log(chave + " : " + valor)
        }
    });
});
