class ListaEstaticaEncadeada {
    constructor(tamanho) {
        this.tamanho = tamanho;
        this.vetor = new Array(tamanho).fill(null).map(() => ({
            valor: null,
            prox: -1,
            ocupado: false
        }));

        this.livre = Array.from({ length: tamanho }, (_, i) => i); // lista de posições livres
        this.inicio = -1; // índice do primeiro elemento
    }

    obterIndiceLivre() {
        return this.livre.length > 0 ? this.livre.shift() : -1;
    }

    liberarIndice(indice) {
        this.vetor[indice] = { valor: null, prox: -1, ocupado: false };
        this.livre.push(indice);
    }

    inserir(valor) {
        const novoIndice = this.obterIndiceLivre();
        if (novoIndice === -1) {
            console.log("Lista cheia!");
            return;
        }

        this.vetor[novoIndice].valor = valor;
        this.vetor[novoIndice].ocupado = true;

        if (this.inicio === -1) {
            this.inicio = novoIndice;
        } else {
            // Inserção no final
            let atual = this.inicio;
            while (this.vetor[atual].prox !== -1) {
                atual = this.vetor[atual].prox;
            }
            this.vetor[atual].prox = novoIndice;
        }
    }

    remover(valor) {
        if (this.inicio === -1) {
            console.log("Lista vazia!");
            return;
        }

        let atual = this.inicio;
        let anterior = -1;

        while (atual !== -1 && this.vetor[atual].valor !== valor) {
            anterior = atual;
            atual = this.vetor[atual].prox;
        }

        if (atual === -1) {
            console.log("Valor não encontrado.");
            return;
        }

        if (anterior === -1) {
            // Remoção no início
            this.inicio = this.vetor[atual].prox;
        } else {
            this.vetor[anterior].prox = this.vetor[atual].prox;
        }

        this.liberarIndice(atual);
    }

    imprimir() {
        let atual = this.inicio;
        let output = "Lista: ";
        while (atual !== -1) {
            output += this.vetor[atual].valor + " -> ";
            atual = this.vetor[atual].prox;
        }
        console.log(output + "null");
    }

    imprimirEstruturaInterna() {
        console.log("Vetor:");
        this.vetor.forEach((n, i) => {
            console.log(`${i}:`, n);
        });
        console.log("Livres:", this.livre);
        console.log("Início:", this.inicio);
    }
}

const lista = new ListaEstaticaEncadeada(5);

lista.inserir(10);
lista.inserir(20);
lista.inserir(30);

lista.imprimir(); // Lista: 10 -> 20 -> 30 -> null

lista.remover(20);
lista.imprimir(); // Lista: 10 -> 30 -> null

lista.inserir(40);
lista.inserir(50);
lista.inserir(60); // Deve mostrar "Lista cheia" se exceder

lista.imprimir();
lista.imprimirEstruturaInterna();
