// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const products = [
    {id: 1, name: 'Produto 1', description: 'Descrição Produto 1'},
    {id: 2, name: 'Produto 2', description: 'Descrição Produto 2'},
    {id: 3, name: 'Produto 3', description: 'Descrição Produto 3'},
    {id: 4, name: 'Produto 4', description: 'Descrição Produto 4'}
]

export default function handler(req, res) {
  res.status(200).json({ products })
}
