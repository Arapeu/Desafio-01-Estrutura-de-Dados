class Pilha {
    constructor() {
        this.itens = [];
    }

    push(elemento) {
        this.itens.push(elemento);
    }

    pop() {
        return this.itens.pop();
    }

    peek() {
        return this.itens[this.itens.length - 1];
    }

    isEmpty() {
        return this.itens.length === 0;
    }

    size() {
        return this.itens.length;
    }

    toArray() {
        return [...this.itens];
    }
}

function pilhasSaoIguais(p1, p2) {
    const a = p1.toArray();
    const b = p2.toArray();

    if (a.length !== b.length) {
        console.log("As pilhas são diferentes. A maior é:", a.length > b.length ? "P1" : "P2");
        return false;
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            console.log("As pilhas são diferentes. Ambas têm o mesmo tamanho, mas elementos diferentes.");
            return false;
        }
    }

    console.log("As pilhas são iguais.");
    return true;
}

function estatisticasPilha(pilha) {
    const arr = pilha.toArray();
    if (arr.length === 0) return null;

    const maior = Math.max(...arr);
    const menor = Math.min(...arr);
    const media = arr.reduce((soma, val) => soma + val, 0) / arr.length;

    return { maior, menor, media };
}

function copiarPilha(p1, p2) {
    const elementos = p1.toArray();
    for (const item of elementos) {
        p2.push(item);
    }
}

function contarImpares(pilha) {
    return pilha.toArray().filter(num => num % 2 !== 0).length;
}

function contarPares(pilha) {
    return pilha.toArray().filter(num => num % 2 === 0).length;
}

const P1 = new Pilha();
const P2 = new Pilha();

// Inserindo valores em P1
[10, 15, 20, 25, 30].forEach(n => P1.push(n));

// Inserindo valores em P2
[10, 15, 20, 25, 30].forEach(n => P2.push(n));

// Testar igualdade
pilhasSaoIguais(P1, P2); // deve dizer que são iguais

// Estatísticas da pilha
const estat = estatisticasPilha(P1);
console.log("Maior:", estat.maior, "Menor:", estat.menor, "Média:", estat.media.toFixed(2));

// Copiar P1 para P2 (adicione duplicado no exemplo)
copiarPilha(P1, P2);
console.log("P2 após cópia:", P2.toArray());

// Contar pares e ímpares
console.log("Ímpares em P1:", contarImpares(P1));
console.log("Pares em P1:", contarPares(P1));
