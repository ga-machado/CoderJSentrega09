// let faturamentomes = document.getElementById("faturamentomes").value
// let horas = document.getElementById("horas").value
// let dias = document.getElementById("dias").value
// let ferias = document.getElementById("ferias").value

let faturamentomes = parseInt (prompt("Quanto você quer faturar por mês com seus serviço de freelancer:"))
let horas = parseInt (prompt("Qual o número de horas por dia que você planeja trabalhar:"))
let dias = parseInt (prompt("Você pretende trabalhar em quantos dias da semana:"))
let ferias = parseInt (prompt("Quantas semanas de férias você planeja tirar no ano:"))
let geralfaturamentodia 
let geralhorasproj
let geraldiasproj

const multiplicacao = (a , b) => a * b
const divisao = (a , b) => a / b
const subtracao = (a , b) => a - b

let horasnomes = parseInt (multiplicacao (4.3 , multiplicacao (dias , horas)))
let horasnomessemferias = parseInt (subtracao (horasnomes, divisao (multiplicacao(ferias, multiplicacao (horas , dias)) , 12) ))
let faturamentodia = parseInt (divisao (faturamentomes , horasnomessemferias))

let horasproj = parseInt (prompt("O custo da sua hora de trabalho a ser cobrado é de R$" + faturamentodia + ",00. Pensando em um projeto a ser executado, quantas horas você vai trabalhar no projeto, por dia:"))
let diasproj = parseInt (prompt("Quantos dias você estima que o projeto vai durar:"))
let nomeproj = (prompt("Qual nome você dará a esse projeto:"))

//CONTRUCTOR
class projeto{
    constructor(geralnomeproj, geralfaturamentodia, geralhorasproj, geraldiasproj) {
        this.geralnomeproj = geralnomeproj;
        this.geralfaturamentodia = geralfaturamentodia;
        this.geralhorasproj = geralhorasproj;
        this.geraldiasproj = geraldiasproj;
        }
    calcularprecoproj(){
        this.precoproj = this.geralfaturamentodia*this.geralhorasproj*this.geraldiasproj;
    }
}

const projetopadrao = new projeto("Projeto Padrão", 100, 8, 10);
const projetobarato = new projeto("Projeto Baixo Custo", 50, 8, 10);
const projetocaro = new projeto("Projeto Alto Custo", 250, 8, 10);
const projeto1 = new projeto(nomeproj, faturamentodia, horasproj, diasproj);

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

let novoelemento = document.createElement("p");
novoelemento.innerHTML = "Inserção no HTML por JS"; 
document.body.append(novoelemento);

//EVENTOS

let inputcampos  = document.getElementById("faturamentomes")
inputcampos.addEventListener("Campo modificado", AlertaInput)
function AlertaInput () {
    alert(inputcampos.value)
}

function ConfirmaEnvio() {
    alert("Obrigado por enviar as informações");
}