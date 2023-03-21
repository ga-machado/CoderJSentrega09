
const calcularValorHora = () => {

let faturamentomes = document.getElementById("faturamentomes").value
let horas = document.getElementById("horas").value
let dias = document.getElementById("dias").value
let ferias = document.getElementById("ferias").value

const multiplicacao = (a , b) => a * b
const divisao = (a , b) => a / b
const subtracao = (a , b) => a - b

let horasnomes = parseInt (multiplicacao (4.3 , multiplicacao (dias , horas)))
let horasnomessemferias = parseInt (subtracao (horasnomes, divisao (multiplicacao(ferias, multiplicacao (horas , dias)) , 12) ))
let faturamentodia = parseInt (divisao (faturamentomes , horasnomessemferias))

alert ("O custo da sua hora de trabalho a ser cobrado é de R$" + faturamentodia + ",00.")

}

const calcularValorProjeto = () => {

let faturamentohora = document.getElementById("faturamentohora").value
let horasproj = document.getElementById("horasproj").value
let diasproj = document.getElementById("diasproj").value
let nomeproj = document.getElementById("nomeproj").value

let geralfaturamentohora
let geralhorasproj
let geraldiasproj

//CONSTRUCTOR
class projeto{
    constructor(geralnomeproj, geralfaturamentohora, geralhorasproj, geraldiasproj) {
        this.geralnomeproj = geralnomeproj;
        this.geralfaturamentohora = geralfaturamentohora;
        this.geralhorasproj = geralhorasproj;
        this.geraldiasproj = geraldiasproj;
        }
    calcularprecoproj(){
        this.precoproj = this.geralfaturamentohora*this.geralhorasproj*this.geraldiasproj;
    }
}

const projetopadrao = new projeto("Projeto Padrão", 100, 8, 10);
const projetobarato = new projeto("Projeto Baixo Custo", 50, 8, 10);
const projetocaro = new projeto("Projeto Alto Custo", 250, 8, 10);
const projeto1 = new projeto(nomeproj, faturamentohora, horasproj, diasproj);

projeto1.calcularprecoproj();
projetopadrao.calcularprecoproj();

alert ("Seu projeto custará R$" + projeto1.precoproj + ",00. Em comparação, o projeto padrão levantado por aqui, considerando um faturamento diário de R$100,00 e 10 dias de trabalho com 8 horas trabalhadas custará R$" + projetopadrao.precoproj + ",00")

//ARRAY
const arrayprojetos = [
    "Projeto Padrão",
    "Projeto Baixo Custo",
    "Projeto Alto Custo",
    nomeproj
]
arrayprojetos.sort();

alert ("Atualmente, na lista de projetos, temos " + arrayprojetos.length + " projetos. Os nomes dos projetos, em ordem alfabética, aparecerão a seguir.")

for (let j = 0; j < arrayprojetos.length; j++) {
    alert (arrayprojetos[j])
}

let nomeachecar = (prompt("Digite o nome do projeto que deseja consultar:"))

//FUNÇÕES
const resultadocheck = arrayprojetos.find((o) => o === nomeachecar)

if (resultadocheck === nomeachecar) {
    alert ("O nome consultado consta na lista!")
}

if (resultadocheck === undefined) {
    alert ("O nome consultado não consta na lista.")
}

//EVENTOS

function FormEnviado (e) {
    e.preventDefault();
    console.log("Informações para cálculo de valor/hora enviadas")
}

let FormValorHora = document.getElementById("FormValorHora")
FormValorHora.addEventListener("submit", FormEnviado)

}