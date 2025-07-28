document.addEventListener("DOMContentLoaded", function(){
    const tela = document.getElementById('tela');
    let result = document.getElementById('result');

    function getNumbers(){
        let number1 = document.getElementById('number1').valueAsNumber;
        let number2 = document.getElementById('number2').valueAsNumber;
        if(isNaN(number1) || isNaN(number2)){
            result.innerText = 'Preencha todos os Campos para fazer as Operações!';
            tela.style.visibility = 'visible';
            return null
        }
        return {number1, number2};
    }

    function reset(){
        let limpar = document.getElementById('limpar')
        limpar.addEventListener('click', function(){
            document.getElementById('number1').value = '';
            document.getElementById('number2').value = '';
            result.innerText = ''
            tela.style.visibility = 'hidden'; 
        })
    }

    const somar = document.getElementById('somar');
    somar.addEventListener('click', function(){
        const {number1 , number2} = getNumbers();
        result.innerText = number1 + number2;
        tela.style.visibility = 'visible';
    });

    const subtrair = document.getElementById('subtrair');
    subtrair.addEventListener('click', function(){
        const {number1 , number2} = getNumbers();
        result.innerText = number1 - number2; 
        tela.style.visibility = 'visible';
    });

    const multiplicar = document.getElementById('multiplicar');
    multiplicar.addEventListener('click', function(){
        const {number1 , number2} = getNumbers();
        result.innerText = number1 * number2;
        tela.style.visibility = 'visible';
    });

    const dividir = document.getElementById('dividir');
    dividir.addEventListener('click', function(){
        const {number1 , number2} = getNumbers();
        if(number2 === 0){
            result.innerText = "Não é Possivel Dividir um Numero p/ Zero!";
            return;
        }
        result.innerText = (number1 / number2).toFixed(2);
        tela.style.visibility = 'visible';
    });
    reset();
});
