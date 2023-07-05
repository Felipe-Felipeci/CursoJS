



function init() {
    const form = document.querySelector('.form');

    form.addEventListener('submit', (evento) =>{
        evento.preventDefault();
        const peso   = Number(document.querySelector('.peso').value);
        const altura = document.querySelector('.altura').value;
        const alerta = document.querySelector('.alerta');
        
        const imc = peso / (altura * altura);

        if (imc < 18.5){
            alerta.innerHTML = 'Abaixo do peso!';
        }else if (imc >= 18.5 && imc < 25){
            alerta.innerHTML = 'Peso normal!';
        }else if (imc >= 25 && imc < 30){
            alerta.innerHTML = 'Sobrepeso!';
        }else if (imc >= 30 && imc < 35){
            alerta.innerHTML = 'Obesidade grau I';
        }else if (imc >= 35 && imc < 40){
            alerta.innerHTML = 'Obesidade grau II';
        }else if (imc >= 40){
            alerta.innerHTML = 'Obesidade grau III';
        }
    });
}

init();