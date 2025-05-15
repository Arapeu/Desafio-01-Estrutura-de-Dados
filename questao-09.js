class TipoNo {
    constructor(item) {
      this.item = item;
      this.prox = null;
      this.ant = null;
    }
  }
  
  class TipoLista {
    constructor() {
      // Nó cabeça
      this.cabeca = new TipoNo(null);
    }
  
    // Locate: retorna nó na posição P (1-based)
    locate(P) {
      if (P < 1) return null;
      let atual = this.cabeca.prox;
      let i = 1;
      while (atual !== null && i < P) {
        atual = atual.prox;
        i++;
      }
      return (i === P) ? atual : null;
    }
  
    // InsereP: insere item na posição P
    insereP(E, P) {
      if (P < 1) {
        console.log("Erro: posição inválida");
        return;
      }
  
      if (P === 1) {
        const novo = new TipoNo(E);
        novo.prox = this.cabeca.prox;
        novo.ant = this.cabeca;
        if (this.cabeca.prox !== null) {
          this.cabeca.prox.ant = novo;
        }
        this.cabeca.prox = novo;
      } else {
        let pos = this.locate(P);
        if (pos !== null) {
          const novo = new TipoNo(E);
          novo.prox = pos;
          novo.ant = pos.ant;
          pos.ant.prox = novo;
          pos.ant = novo;
        } else {
          console.log("Erro: posição inválida, lista menor que P-1 elementos");
        }
      }
    }
  
    // RemovaP: remove e retorna item da posição P
    removaP(P) {
      if (P < 1) {
        console.log("Erro: posição inválida");
        return null;
      }
      let pos = this.locate(P);
      if (pos === null) {
        console.log("Erro: posição inválida, lista menor que P elementos");
        return null;
      }
      pos.ant.prox = pos.prox;
      if (pos.prox !== null) {
        pos.prox.ant = pos.ant;
      }
      return pos.item;
    }
  
    // Função para imprimir a lista (para debug)
    imprimir() {
      let atual = this.cabeca.prox;
      let i = 1;
      while (atual !== null) {
        console.log(`Posição ${i}:`, atual.item);
        atual = atual.prox;
        i++;
      }
    }
  }
  
  // Exemplo de uso
  const lista = new TipoLista();
  
  lista.insereP(10, 1);
  lista.insereP(20, 2);
  lista.insereP(30, 3);
  
  console.log("Lista após inserções:");
  lista.imprimir();
  
  console.log("Removendo item na posição 2:", lista.removaP(2));
  
  console.log("Lista após remoção:");
  lista.imprimir();
  