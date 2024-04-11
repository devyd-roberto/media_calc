const form = document.getElementById ('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Aprovado">';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Reprovado">';
const atividade = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite Nota Minima"));


let linhas = '';

form.addEventListener ('submit', function (e) {
    e.preventDefault();
    
    adcionaLista ();
    atualizaTabela ();
    atualizaMediaFinal ();
    
    
});

function adcionaLista () {
    const inputNomeAtividade = document.getElementById ('nome-atividade');
    const inputNotaAtividade = document.getElementById ('nota-atividade');

    if (atividade.includes(inputNomeAtividade.value) ) {

        alert (`A atividade ${inputNomeAtividade.value} já foi inserida`);

    }

    else {
        atividade.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha ='<tr>'
        linha += (`<td> ${inputNomeAtividade.value}</td>`);
        linha += (`<td> ${inputNotaAtividade.value}</td>`);
        linha += (`<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</td>`);
        linha += '</tr>'
    
        linhas += linha

    }

   

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela () {

    const corpoTabela = document.querySelector ('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal ( ) {
    const mediaFinal = calculaMediaFinal ();
    document.getElementById ('media-final-valor').innerHTML = mediaFinal;
    document.getElementById ('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
    
     
}

function calculaMediaFinal () {
    let somaNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas [i];
    }

    return  somaNotas / notas.length;
    
}