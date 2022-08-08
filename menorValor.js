import livros from './listaLivros.js'

function menorValor(arrProdutos, posicaoInicial){
    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco  < arrProdutos[maisBarato].preco){
            maisBarato = atual;
        }
    }

    return maisBarato;
}

export default menorValor;


// console.log(`o livro mais barato é ${livros[maisBarato].titulo} e custa ${livros[maisBarato].preco}`)