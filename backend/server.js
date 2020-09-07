import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import data from './mock/data';

import userRoute from './routes/userRoute';
const app = express();

// post request middleware
app.use(bodyParser.json());

console.log(__dirname, '__dirname');
console.log(path.join(__dirname, '/../frontend/build'), 'resolve');

app.use(express.static(path.resolve(__dirname, '../frontend/build')));

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


const port = process.env.PORT || 5000;
app.listen(port, _ => {
  console.log('Server is runing at 5000')
})