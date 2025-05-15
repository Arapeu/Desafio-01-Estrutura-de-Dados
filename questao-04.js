// Nó da lista duplamente encadeada
class Node {
    constructor(valor) {
        this.valor = valor;
        this.anterior = null;
        this.proximo = null;
    }
}

// Classe Pilha baseada em lista duplamente encadeada
class PilhaDupla {
    constructor() {
        this.topo = null;      // Aponta para o topo da pilha
        this.base = null;      // Aponta para a base da pilha
        this.tamanho = 0;
    }

    // Inserir no topo da pilha
    push(valor) {
        const novoNo = new Node(valor);
        if (this.tamanho === 0) {
            this.topo = this.base = novoNo;
        } else {
            novoNo.anterior = this.topo;
            this.topo.proximo = novoNo;
            this.topo = novoNo;
        }
        this.tamanho++;
    }

    // Remover do topo da pilha
    pop() {
        if (this.tamanho === 0) return null;

        const valorRemovido = this.topo.valor;
        this.topo = this.topo.anterior;

        if (this.topo) this.topo.proximo = null;
        else this.base = null;

        this.tamanho--;
        return valorRemovido;
    }

    // Retorna o valor do topo sem remover
    peek() {
        return this.topo ? this.topo.valor : null;
    }

    // Verifica se a pilha está vazia
    isEmpty() {
        return this.tamanho === 0;
    }

    // Retorna o tamanho da pilha
    size() {
        return this.tamanho;
    }

    // Para debug: imprime a pilha do topo à base
    imprimir() {
        let atual = this.topo;
        const elementos = [];
        while (atual) {
            elementos.push(atual.valor);
            atual = atual.anterior;
        }
        console.log("Pilha (topo → base):", elementos.join(" -> "));
    }
}

const pilha = new PilhaDupla();

pilha.push(10);
pilha.push(20);
pilha.push(30);
pilha.imprimir();  // Pilha (topo → base): 30 -> 20 -> 10

console.log("Topo:", pilha.peek());       // 30
console.log("Removido:", pilha.pop());    // 30
pilha.imprimir();                         // Pilha (topo → base): 20 -> 10
console.log("Tamanho:", pilha.size());    // 2
console.log("Está vazia?", pilha.isEmpty()); // false