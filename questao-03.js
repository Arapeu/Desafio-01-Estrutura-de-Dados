// Fila de pilhas (cada pilha é um array)
const filaDePilhas = [];

// 1. Inserir número em uma pilha
function inserirNumeroNaPilha(pilha, numero) {
    pilha.push(numero);
}

// 2. Remover número do topo da pilha
function removerNumeroDaPilha(pilha) {
    if (pilha.length === 0) {
        console.log("A pilha está vazia!");
        return null;
    }
    return pilha.pop();
}

// 3. Inserir pilha na fila
function inserirPilhaNaFila(fila, pilha) {
    fila.push(pilha);
}

// 4. Remover pilha da fila (FIFO)
function removerPilhaDaFila(fila) {
    if (fila.length === 0) {
        console.log("A fila está vazia!");
        return null;
    }
    return fila.shift(); // Remove a pilha mais antiga
}

// Criando duas pilhas
const pilha1 = [];
inserirNumeroNaPilha(pilha1, 10);
inserirNumeroNaPilha(pilha1, 20);

const pilha2 = [];
inserirNumeroNaPilha(pilha2, 30);
inserirNumeroNaPilha(pilha2, 40);

// Inserindo pilhas na fila
inserirPilhaNaFila(filaDePilhas, pilha1);
inserirPilhaNaFila(filaDePilhas, pilha2);

console.log("Fila de pilhas:", JSON.stringify(filaDePilhas));

// Remover uma pilha da fila e mostrar seus valores
const pilhaRemovida = removerPilhaDaFila(filaDePilhas);
console.log("Pilha removida da fila:", pilhaRemovida);

// Remover número do topo da pilha removida
const numeroRemovido = removerNumeroDaPilha(pilhaRemovida);
console.log("Número removido da pilha:", numeroRemovido);