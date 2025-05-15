# README - Desafio - 01 de Estruturas de Dados

Nome: Pedro Henrique de Araujo Ribeiro
RA: 1272122069

Este documento descreve as soluções para as questões propostas, relacionadas ao uso de estruturas de dados fundamentais como pilhas, filas e listas encadeadas, todas implementadas em JavaScript.

---

## Questão 1 – Inverter letras de cada palavra preservando a ordem (Pilha)

**Descrição:**  
Dado um texto terminado por ponto, invertemos as letras de cada palavra usando uma pilha, mas mantemos a ordem das palavras.

**Solução:**  
Utilizamos uma pilha para armazenar as letras de cada palavra enquanto iteramos sobre o texto. Ao encontrar espaço ou ponto, desempilhamos as letras para formar a palavra invertida.

**Exemplo:**  
Entrada: `ESTE EXERCÍCIO É MUITO FÁCIL.`  
Saída: `ETSE OICÍCREXE É OTIUM LICÁF`

---

## Questão 2 – Ordenar os valores de uma pilha em ordem crescente

**Descrição:**  
Ordenar os elementos de uma pilha usando somente operações de pilha (push, pop) e uma pilha auxiliar.

**Solução:**  
Usamos duas pilhas: uma principal e uma auxiliar. Movemos elementos entre elas para ordenar, inserindo os elementos da principal na auxiliar em ordem crescente.

---

## Questão 3 – Fila de Pilhas: inserção e remoção

**Descrição:**  
Implementar uma estrutura onde uma fila armazena pilhas, e cada pilha armazena números inteiros. Criar funções para inserir e remover números das pilhas e para inserir e remover pilhas da fila.

**Solução:**  
- Pilha: representada por array, com push/pop.  
- Fila: representada por array, com push/shift para inserção e remoção.  
As funções manipulam os elementos de pilhas e as pilhas dentro da fila.

---

## Questão 4 – TAD Pilha usando lista duplamente encadeada

**Descrição:**  
Definir um tipo abstrato de dado (TAD) que implemente uma pilha usando uma lista duplamente encadeada.

**Solução:**  
A lista duplamente encadeada tem nós com referências para o anterior e próximo. A pilha manipula o topo para inserção (push) e remoção (pop), mantendo operações em tempo O(1).

---

## Questão 5 – Operações sobre duas pilhas (P1 e P2)

Funções implementadas:

- Testar se duas pilhas são iguais; se não, indicar qual é maior (comparando valores).  
- Obter maior, menor e média aritmética dos elementos de uma pilha.  
- Copiar elementos de P1 para P2.  
- Contar elementos ímpares e pares de uma pilha.

---

## Questão 6 – Repetir exercício anterior usando duas filas (F1 e F2)

**Descrição:**  
Implementar as mesmas funcionalidades da questão 5, mas utilizando filas em vez de pilhas.

---

## Questão 7 – Lista encadeada estática com vetor

**Descrição:**  
Implementar uma lista encadeada usando alocação estática, simulando ponteiros com índices em um vetor fixo.

**Solução:**  
- Cada elemento do vetor representa um nó com `valor` e `prox` (índice do próximo nó).  
- Uma lista de posições livres é mantida para alocação e liberação.  
- Inserção e remoção manipulam os índices para manter a lista encadeada.

---

## Questão 8 – União e Interseção de duas listas simplesmente encadeadas

**Descrição:**  
Dadas duas listas simplesmente encadeadas L1 e L2:  
(a) Criar L3 que seja a união sem repetição de L1 e L2.  
(b) Criar L4 que seja a interseção dos elementos presentes em L1 e L2.

**Solução:**  
- Para a união, percorremos L1 e L2 inserindo elementos em L3 somente se não estiverem presentes.  
- Para interseção, percorremos L1 verificando se os elementos existem em L2, inserindo-os em L4.

---

## Como executar os códigos

As implementações foram feitas em **JavaScript** e podem ser executadas em:

- Navegador: colocando o código em `<script>` dentro de um arquivo HTML e abrindo no navegador.  
- Node.js: salvando o código em arquivo `.js` e executando via terminal com `node nomeArquivo.js`.

---
