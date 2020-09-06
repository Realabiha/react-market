import express from 'express';
import User from '../model/userModel';
import {getJwt} from '../util';

const router = express.Router();

router.post('/signin', async (req, res) => {
  const userInfo = await User.findOne(req.body);
  if(userInfo){
    const token = getJwt()(userInfo);
    const {name, email} = userInfo;
    res.send({name, email, token});
  }
  else
  res.status(404).send('Invalid email or password!');
})

router.post('/register', async (req, res) => {
  try {
    const userInfo = await User.findOne(req.body);
    if(userInfo) res.status(401).send('email has been registered!');
    else{
      const token = getJwt()(userInfo);
      const {name, email} = userInfo;
      res.send({name, email, token});
    }
  } catch (error) {
    res.status(401).send(error.message);    
  }
})

router.get('/createAdmin', async res => {
  // const admin = new User({
  //   name: 'abiha',
  //   email: 'm17386550687@163.com',
  //   password: '123456',
  //   isAdmin: true
  // })
  try {
    const admin = await User.create({
      name: 'abiha',
      email: 'm17386550687@163.com',
      password: '123456',
      isAdmin: true
    })
    res.send(admin);
  } catch (error) {
    res.send(error);
  }
})


export default router;