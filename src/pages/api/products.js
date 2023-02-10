// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const products = [
    {id: 1, name: 'Produto 1', description: 'Descrição Produto 1'},
    {id: 2, name: 'Produto 2', description: 'Descrição Produto 2'},
    {id: 3, name: 'Produto 3', description: 'Descrição Produto 3'},
    {id: 4, name: 'Produto 4', description: 'Descrição Produto 4'},
    {id: 5, name: 'Produto 5', description: 'Descrição Produto 5'},
    {id: 6, name: 'Produto 6', description: 'Descrição Produto 6'},
    {id: 7, name: 'Produto 7', description: 'Descrição Produto 7'},
    {id: 8, name: 'Produto 8', description: 'Descrição Produto 8'}
]

export default function handler(req, res) {
  res.status(200).json({ products, randomNumber: Math.random() })
}
