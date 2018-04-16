const  express=require('express');
const  app=express();
const mongoose = require('mongoose');
const mongoUrl = `mongodb://127.0.0.1:27017/youzan`;
const Schema = mongoose.Schema
mongoose.Promise = global.Promise; 

const UserSchema = new mongoose.Schema({ //定义数据模型
    name: String,
    pwd: String
});
mongoose.model('users', UserSchema);

var User = mongoose.model('users');

//配置登录视图
app.get('/',function (req,res) {
  res.sendfile(__dirname + "/" + "login.html" );
})
//处理登录逻辑
app.get('/login',function (req,res) {
  var name=req.query.name;
  var pwd=req.query.pwd;
  User.findOne({name:name,pwd:pwd},function (error,result) {
      if (result==null)
      {
          res.sendfile(__dirname + "/" + "no.html" );
      }else
      {
          res.sendfile(__dirname + "/" + "ok.html" );
      }
  })
})
//配置注册视图
app.get('/register.html',function (req,res) {
  res.sendfile(__dirname+"/"+"register.html");
})
//处理注册逻辑
app.get('/register',function (req,res) {
  var  name=req.query.name;
  var pwd=req.query.pwd;
  var user=new User(
      {name:name,
          pwd:pwd
      }
  )
  user.save(function (err,result) {
      if (result==null) {
          res.sendfile(__dirname + "/" + "no.html" );
      } else {
          res.sendfile(__dirname + "/" + "register_OK.html" );
      }
  });

})


mongoose.connection
  .openUri(mongoUrl)
  .once('open', async () => {
    console.log('database connect success')
  })
  .on('error', (error) => {
    console.warn('database connect fail',
     error)
  })

app.listen(3000);