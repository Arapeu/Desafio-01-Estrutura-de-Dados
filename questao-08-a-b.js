class No {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class ListaSimples {
    constructor() {
        this.inicio = null;
    }

    inserir(valor) {
        const novo = new No(valor);
        if (!this.inicio) {
            this.inicio = novo;
        } else {
            let atual = this.inicio;
            while (atual.proximo) {
                atual = atual.proximo;
            }
            atual.proximo = novo;
        }
    }

    contem(valor) {
        let atual = this.inicio;
        while (atual) {
            if (atual.valor === valor) return true;
            atual = atual.proximo;
        }
        return false;
    }

    imprimir(nome = "Lista") {
        let atual = this.inicio;
        let out = `${nome}: `;
        while (atual) {
            out += atual.valor + " -> ";
            atual = atual.proximo;
        }
        console.log(out + "null");
    }
}
//=============================================================
//(A) - Cria sem Repetição
//=============================================================

function criarUniaoSemRepeticao(L1, L2) {
    const L3 = new ListaSimples();

    let atual = L1.inicio;
    while (atual) {
        if (!L3.contem(atual.valor)) {
            L3.inserir(atual.valor);
        }
        atual = atual.proximo;
    }

    atual = L2.inicio;
    while (atual) {
        if (!L3.contem(atual.valor)) {
            L3.inserir(atual.valor);
        }
        atual = atual.proximo;
    }

    return L3;
}

//=============================================================
//(B) Interseção
//=============================================================

function criarInterseccao(L1, L2) {
    const L4 = new ListaSimples();

    let atual = L1.inicio;
    while (atual) {
        if (L2.contem(atual.valor) && !L4.contem(atual.valor)) {
            L4.inserir(atual.valor);
        }
        atual = atual.proximo;
    }

    return L4;
}

//=============================================================
// Exemplo de uso

const L1 = new ListaSimples();
L1.inserir(1);
L1.inserir(2);
L1.inserir(3);
L1.inserir(4);

const L2 = new ListaSimples();
L2.inserir(3);
L2.inserir(4);
L2.inserir(5);
L2.inserir(6);

L1.imprimir("L1");
L2.imprimir("L2");

const L3 = criarUniaoSemRepeticao(L1, L2);
L3.imprimir("L3 (União)");

const L4 = criarInterseccao(L1, L2);
L4.imprimir("L4 (Interseção)");
