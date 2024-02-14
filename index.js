const perguntas = [
  {
    pergunta: "Qual é a função do método 'querySelector' em JavaScript?",
    respostas: [
      "Selecionar um elemento HTML pelo seu ID",
      "Selecionar um elemento HTML pelo nome da classe",
      "Selecionar um elemento HTML pelo seletor CSS"
    ],
    correta: 2
  },
  {
    pergunta: "Qual dos seguintes é um tipo de dado primitivo em JavaScript?",
    respostas: [
      "Array",
      "Object",
      "String"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a maneira correta de verificar se duas variáveis são iguais em valor e tipo em JavaScript?",
    respostas: [
      "Usando o operador '=='",
      "Usando o operador '==='",
      "Usando o método 'equals()'"
    ],
    correta: 1
  },
  {
    pergunta: "Qual método JavaScript é usado para adicionar um elemento ao final de um array?",
    respostas: [
      "push()",
      "append()",
      "add()"
    ],
    correta: 0
  },
  {
    pergunta: "O que o método 'map()' faz em JavaScript?",
    respostas: [
      "Itera sobre os elementos de um array e executa uma função para cada elemento",
      "Remove o último elemento de um array",
      "Retorna o tamanho de um array"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o resultado da expressão '3 + 2 + '5' em JavaScript?",
    respostas: [
      "10",
      "55",
      "7"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o operador de atribuição composta para 'x = x + y' em JavaScript?",
    respostas: [
      "+=",
      "-=",
      "*="
    ],
    correta: 0
  },
  {
    pergunta: "Qual função JavaScript é usada para converter uma string em um número?",
    respostas: [
      "parseInt()",
      "toFixed()",
      "toString()"
    ],
    correta: 0
  },
  {
    pergunta: "O que o método 'filter()' faz em JavaScript?",
    respostas: [
      "Filtra os elementos de um array com base em uma condição fornecida",
      "Ordena os elementos de um array em ordem alfabética",
      "Inverte a ordem dos elementos de um array"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a maneira correta de escrever um comentário de linha única em JavaScript?",
    respostas: [
      "// Este é um comentário",
      "<!-- Este é um comentário -->",
      "/* Este é um comentário */"
    ],
    correta: 0
  }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


for(const item of perguntas){
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta


  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-'+ perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta) 
    //cria fução - aronfuction => seta
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

      if (corretas.size >= 10) {
      document.getElementById('parabens').style.display = 'block';
     } 
      else {
        document.getElementById('parabens').style.display = 'none';
      }
    
    } 

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  quiz.appendChild(quizItem)
}