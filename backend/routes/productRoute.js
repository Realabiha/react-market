import express from 'express';
import data from '../mock/data';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(data);
})


router.get('/:id', (req, res) => {
  const {id} = req.params;
  id ? res.send(findProduct(id)) : res.status(404).send(null); 
  function findProduct(id){
    return data.products.filter(p => p.id === 1*id);
  }
})

export default router;