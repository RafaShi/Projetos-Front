/* DOMINANDO ARRAY NO JS

map (mapear item por item no array)
    - Criar um novo array com a mesma quantidade de itens do array original
    - O novo array você pode alterar o que quiser em relação ao array original
    - Você tem acesso a 3 dados:
        - Item por item do array
        - Posião atual do array
        - Array completo

reduce ( reduzir o array a um único valor)
    - Reduz um array inteiro em um ÚNICO valor
    - Você tem acesso a 4 dados:
        - Acumulador
        - Valor atual
        - Posição atual
        - Array completo

*/


const produtos =[
    { id: 1, nome: "Mouse Gamer", preco: 120, temDesconto: true, quantidade: 2 },
    { id: 2, nome: "Teclado Mecânico", preco: 350, temDesconto: false, quantidade: 1 },
    { id: 3, nome: "Monitor 24\"", preco: 900, temDesconto: true, quantidade: 1 },
    { id: 4, nome: "Headset", preco: 200, temDesconto: false, quantidade: 3 },
    { id: 5, nome: "Webcam Full HD", preco: 250, temDesconto: true, quantidade: 1 },
    { id: 6, nome: "Cadeira Gamer", preco: 1100, temDesconto: false, quantidade: 1 },
    { id: 7, nome: "Mousepad XL", preco: 80, temDesconto: true, quantidade: 2 }
];

//CRIAR UM NOVO ARRAY FORMATANDO A MOEDA E DANDO DESCONTO 

/*const numeros = [1,2,3,4,5]
const dobro = numeros.map((numero, index, arrayCompleto)=>{
    return numero*4
})
console.log(dobro)*/

const novosProdutos = produtos.map (produto=>{

    const novoPreco = produto.temDesconto ? produto.preco * 0.9 : produto.preco //?=if :=else

    return{
        id: produto.id,
        nome: produto.nome,
        preco: novoPreco.toLocaleString('pt-br',{
            style: 'currency', currency: 'BRL'
        }), 
        quantidade: produto.quantidade,
    }
})

console.log(novosProdutos);


//QUAL SERÁ O FATURAMENTO, SE VENDERMOS TODO O ESTOQUE

/*const numeros = [1,2,3,4,5] 
const soma= numeros.reduce((acumulador, atual)=>{

    const total = acumulador + atual

    return total
})
console.log(soma)*/

const totalVendas = produtos.reduce((acumulador, produto) => {
    return acumulador + (produto.preco * produto.quantidade);
}, 0);

console.log(
    totalVendas.toLocaleString ('pt-br', {
        style: 'currency',
        currency: 'BRL',
    }))

//FILTAR SOMENTE OS PRODUTOS QUE ESTÃO EM PROMOÇÃO