const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputpeso = e.target.querySelector('#peso')
    const inputaltura = e.target.querySelector('#altura')

    const peso = Number(inputpeso.value);
    const altura = Number(inputaltura.value);

    if (!peso) {
        setResultado('Peso invalido', false);
        return
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura); 
    const imcCorrigido = getImcCorrigido(imc)
    const nivelImc = getNivelImc(imc);

    const msg = `Seu Imc é ${imcCorrigido} (${nivelImc}).`;
    setResultado(msg, true);
});

function getImcCorrigido(imc){
    const resultado = imc *10000 
    return resultado.toFixed(2);   
}

function getNivelImc(imc) {

    const nivel = ['abaixo do peso', 'Peso Normal', 'Sobrepeso',
        'Obesidade 1', 'Obesidade 2', 'Obesidade 3'];

    if (imc >= 0.003999) return nivel[5];
    if (imc >= 0.003499) return nivel[4];
    if (imc >= 0.002999) return nivel[3];
    if (imc >= 0.002499) return nivel[2];
    if (imc >= 0.001859) return nivel[1];
    if (imc < 0.001859) return nivel[0];
};

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(6);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('cu');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}
