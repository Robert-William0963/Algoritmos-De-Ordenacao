import livros from './listaLivros.js'
import menorValor from './menorValor.js'

for (let atual=0; atual < livros.length; atual++) {
    const menor = menorValor(livros, atual);

    const livroAtual = livros[atual];
    const livroMenorpreco = livros[menor];

    livros[atual] = livroMenorpreco;
    livros[menor] = livroAtual;
}

// console.log(livros);