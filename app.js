const  express=require('express');
const  app=express();
const mongoose = require('mongoose');
const mongoUrl = `mongodb://127.0.0.1:27017/youzan`;
const Schema = mongoose.Schema

const UserSchema = new mongoose.Schema({ //定义数据模型
    name: String,
    pwd: String
});
mongoose.model('users', UserSchema);

mongoose.connection
  .openUri(mongoUrl)
  .once('open', async () => {
    console.log('database connect success')
  })
  .on('error', (error) => {
    console.wran('database connect fail',
     error)
  })

  app.listen(3000);