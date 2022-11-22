function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const imc = document.querySelector('.imc');

    const pessoas = [];

    form.onsubmit = function(evento){
        evento.preventDefault();
    };

    function recebeForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        function Pessoa(nome, sobrenome, peso, altura){
            return {
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value
            };
        };

        function calculaIMC(peso, altura){
            const result = parseFloat(peso.value)/(parseFloat(altura.value)*parseFloat(altura.value))
            
            if (isNaN(result)){
                return 'Invalido';
            }
            else{
                return parseInt(result);
            }
        }

        pessoas.push(Pessoa(nome, sobrenome, peso, altura))

        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}`+` ${peso.value} ${altura.value}</p>`;

        imc.innerHTML += `<p>O IMC de ${nome.value} é `+`${calculaIMC(peso, altura)}</p>`;
    }


    form.addEventListener('submit', recebeForm);

};

meuEscopo();



