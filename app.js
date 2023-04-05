import express from "express"; //Importando uma bliblioteca para dentro da aplicação 


// Uma const receberá uma instancia do express
const app = express();

//Array de eletronicos
const notebooks = [

{"id": 1,"Marca":"Asus"},
{"id": 2,"Marca":"HP"}

]

//criando rotas
//rora vazia. 200 status ok

app.get('/', (req, res ) => {

    res.status(200).send('API LOJA');
})

app.get('/note', (req, res) => {

    res.status(200).json(notebooks);

})

export default app;