import express from "express";

const app = express();

// http://localhost:3333/users
app.get('/', (request, response) => {
  return response.send({ message: 'Hello World - NLW #04!'})
})

app.post('/', (request, response) => {
 return response.json({ message: 'Os dados foram salvos com sucesso!'})
})

app.listen(3333, () => console.log('Server is running!'))