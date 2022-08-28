//Gerando nova senha

const gerarNovaSenha = document.getElementById ('gerarNovaSenha')
const geradorDeSenhas = document.getElementById ('geradorDeSenhas')

//Funções

const letraMinuscula = () => {
    return String.fromCharCode(Math.floor(Math.random() *26 ) +97);
}

const letraMaiuscula = () => {
    return String.fromCharCode(Math.floor(Math.random() *26 ) + 65);
}

const numeros = () => {
    return Math.floor(Math.random() * 9).toString();
}

const simbolo = () =>{
    const simbolos = "!@#$%&*(){}[]?";
    return simbolos [Math.floor(Math.random() * simbolos.length)];
}

const gerandoSenha = (letraMinuscula, letraMaiuscula, numeros, simbolo) => {
    let password = "";

    const passwordTamanho = 8;

    const generators = [
        letraMinuscula,
        letraMaiuscula,
        numeros,
        simbolo
    ]

    for(i = 0; i < passwordTamanho; i = i + generators.length){
        generators.forEach(() => {
            const randomValue =
             generators[Math.floor(Math.random() * generators.length)]();

             password += randomValue
        })
    }
    geradorDeSenhas.style.display = "block";
    geradorDeSenhas.querySelector('h4').innerText = password;

};



//Eventos

gerarNovaSenha.addEventListener('click' , () =>{
    gerandoSenha(
        letraMinuscula,
        letraMaiuscula,
        numeros,
        simbolo);
})

//Formulário:

