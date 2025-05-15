function ordenarPilha(pilha) {
    const pilhaAuxiliar = [];

    while (pilha.length > 0) {
        // Retira o topo da pilha original
        const temp = pilha.pop();

        // Enquanto a pilha auxiliar não estiver vazia e o topo for maior que o temp,
        // move os elementos de volta para a pilha original
        while (pilhaAuxiliar.length > 0 && pilhaAuxiliar[pilhaAuxiliar.length - 1] > temp) {
            pilha.push(pilhaAuxiliar.pop());
        }

        // Coloca o elemento na pilha auxiliar na posição correta
        pilhaAuxiliar.push(temp);
    }

    // Agora os elementos estão em ordem crescente na pilhaAuxiliar (do topo para base),
    // então passamos de volta para a pilha original se quiser mantê-la como principal
    while (pilhaAuxiliar.length > 0) {
        pilha.push(pilhaAuxiliar.pop());
    }

    return pilha; // Pilha agora está ordenada em ordem crescente (menor no topo)
}
// Exemplo de uso
const pilha = [34, 3, 31, 98, 92, 23];
console.log("Pilha original:", [...pilha]);

const pilhaOrdenada = ordenarPilha(pilha);
console.log("Pilha ordenada:", pilhaOrdenada);