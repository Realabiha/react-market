import express from 'express';
import data from './mock/data';
import bodyParser from 'body-parser';

import userRoute from './routes/userRoute';
const app = express();

// post request middleware
app.use(bodyParser.json());

app.use('/api/users', userRoute);

app.get('/api/products', (req, res) => {
  res.send(data);
})


app.get('/api/products/:id', (req, res) => {
  const {id} = req.params;
  id ? res.send(findProduct(id)) : res.status(404).send(null); 
  function findProduct(id){
    return data.products.filter(p => p.id === 1*id);
  }
})


app.listen(5000, _ => {
  console.log('Server is runing at 5000')
})