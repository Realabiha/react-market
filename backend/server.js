import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import data from './mock/data';

import userRoute from './routes/userRoute';
const app = express();

// post request middleware
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '../frontend/build')));

app.use('/users', userRoute);

app.get('/products', (req, res) => {
  res.send(data);
})


app.get('/products/:id', (req, res) => {
  const {id} = req.params;
  id ? res.send(findProduct(id)) : res.status(404).send(null); 
  function findProduct(id){
    return data.products.filter(p => p.id === 1*id);
  }
})


const port = process.env.PORT || 5000;
app.listen(port, _ => {
  console.log(`Server is runing at ${port}`)
})