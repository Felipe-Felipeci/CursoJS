function init() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    // form.onsubmit = (evento) => {
    //     evento.preventDefault();
    //     console.log(1);
    // };
    form.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,   
        });

        console.log(pessoas[0]);

        resultado.innerHTML += ` <p>${nome.value} ${sobrenome.value} </p> `;
    });
}

init();
