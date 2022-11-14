const itens = [
    {
        id: 0,
        nome: 'item1',
        img: 'image.jpg',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'item2',
        img: "semImagem.png",
        quantidade: 0
    },
    {
        id: 2,
        nome: 'item3',
        img: "semImagem.png",
        quantidade: 0
    },
    {
        id: 3,
        nome: 'item4',
        img: "semImagem.png",
        quantidade: 0
    },
    {
        id: 4,
        nome: 'item5',
        img: "semImagem.png",
        quantidade: 0
    },
    {
        id: 5,
        nome: 'item6',
        img: "semImagem.png",
        quantidade: 0
    },
    {
        id: 6,
        nome: 'item7',
        img: "semImagem.png",
        quantidade: 0
    },
    {
        id: 7,
        nome: 'item8',
        img: "semImagem.png",
        quantidade: 0
    },
    {
        id: 8,
        nome: 'item9',
        img: "semImagem.png",
        quantidade: 0
    },
    {
        id: 9,
        nome: 'item10',
        img: "semImagem.png",
        quantidade: 0
    },
    {
        id: 10,
        nome: 'item11',
        img: "semImagem.png",
        quantidade: 0
    },
    {
        id: 11,
        nome: 'item12',
        img: "semImagem.png",
        quantidade: 0
    },
    {
        id: 12,
        nome: 'item13',
        img: "semImagem.png",
        quantidade: 0
    },
    {
        id: 13,
        nome: 'item14',
        img: "semImagem.png",
        quantidade: 0
    },
]

inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    itens.map((val) => {
        containerProdutos.innerHTML += `
             <div class="produto-single">
                <img src="`+ val.img + `" />
                <p>`+ val.nome + `</p>
                <a key="`+ val.id + `" href=""> Adicionar ao carrinho <a/>
             </div>
            `;

    });
}

    inicializarLoja();


