class Fila {
    constructor() {
        this.itens = [];
    }

    enqueue(elemento) {
        this.itens.push(elemento);
    }

    dequeue() {
        return this.itens.shift();
    }

    peek() {
        return this.itens[0];
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

function filasSaoIguais(f1, f2) {
    const a = f1.toArray();
    const b = f2.toArray();

    if (a.length !== b.length) {
        console.log("As filas são diferentes. A maior é:", a.length > b.length ? "F1" : "F2");
        return false;
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            console.log("As filas são diferentes. Mesmo tamanho, mas elementos diferentes.");
            return false;
        }
    }

    console.log("As filas são iguais.");
    return true;
}

function estatisticasFila(fila) {
    const arr = fila.toArray();
    if (arr.length === 0) return null;

    const maior = Math.max(...arr);
    const menor = Math.min(...arr);
    const media = arr.reduce((soma, val) => soma + val, 0) / arr.length;

    return { maior, menor, media };
}

function copiarFila(f1, f2) {
    const elementos = f1.toArray();
    for (const item of elementos) {
        f2.enqueue(item);
    }
}

function contarImparesFila(fila) {
    return fila.toArray().filter(num => num % 2 !== 0).length;
}

function contarParesFila(fila) {
    return fila.toArray().filter(num => num % 2 === 0).length;
}

const F1 = new Fila();
const F2 = new Fila();

// Preencher F1 e F2
[10, 15, 20, 25, 30].forEach(n => F1.enqueue(n));
[10, 15, 20, 25, 30].forEach(n => F2.enqueue(n));

// Verificar igualdade
filasSaoIguais(F1, F2);

// Estatísticas
const estat = estatisticasFila(F1);
console.log("Maior:", estat.maior, "Menor:", estat.menor, "Média:", estat.media.toFixed(2));

// Copiar F1 para F2
copiarFila(F1, F2);
console.log("F2 após cópia:", F2.toArray());

// Contar pares e ímpares
console.log("Ímpares em F1:", contarImparesFila(F1));
console.log("Pares em F1:", contarParesFila(F1));
