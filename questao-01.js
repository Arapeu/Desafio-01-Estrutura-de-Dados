function inverterPalavrasComPilha(texto) {
    if (!texto.endsWith('.')) {
        console.log("O texto deve terminar com ponto final.");
        return;
    }

    texto = texto.slice(0, -1); // Remove o ponto final
    const palavras = texto.split(' ');
    const resultado = [];

    for (const palavra of palavras) {
        const pilha = [];
        let palavraInvertida = '';

        // Empilha cada caractere da palavra
        for (let char of palavra) {
            pilha.push(char);
        }

        // Desempilha para inverter
        while (pilha.length > 0) {
            palavraInvertida += pilha.pop();
        }

        resultado.push(palavraInvertida);
    }

    console.log(resultado.join(' '));
}

// Exemplo de uso
inverterPalavrasComPilha("ESTE EXERCÍCIO É MUITO FÁCIL.");
