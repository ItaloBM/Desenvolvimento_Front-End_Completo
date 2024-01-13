// Função para calcular a idade com base no mês/ano de nascimento
function calcularIdade(dataNascimento) {
const hoje = new Date();
const nascimento = new Date(dataNascimento);
        
let idade = hoje.getFullYear() - nascimento.getFullYear();
const mesAtual = hoje.getMonth();
const mesNascimento = nascimento.getMonth();
      
if (mesNascimento > mesAtual || (mesNascimento === mesAtual && nascimento.getDate() > hoje.getDate())) {
    idade--;
    }
      
    return idade;
    }
      
// Obtendo o elemento <li> onde a idade será exibida
const liIdade = document.getElementById('idade');
      
// Data de nascimento no formato "AAAA-MM"
const dataNascimento = "1998-10"; 
      
// Calculando a idade e atualizando o elemento <li>
const idadeCalculada = calcularIdade(dataNascimento);
liIdade.textContent = `Idade: ${idadeCalculada} anos`;


// ao rolar mais de 100px para baixo, adiciona a classe "navbar dark"
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
