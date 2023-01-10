const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// const server = require('http').createServer(app);

const indexRouter = require('./routes/index');
const userRouter = require('./routes/contact');


app.use(cors()); // cors 미들웨어를 삽입합니다.

app.use('/', indexRouter);
//추후 리액트 라우터랑 연동할 주소
//리액트의 연락컴포넌트가 비동기로 데이터를 받아 올 라우터임
//결과여부를 리액트 전송할 라우터임
app.use ('/contact', userRouter);
//주소창 localhost :8080/contact


// app.get('/', (req,res) => { // 요청패스에 대한 콜백함수를 넣어줍니다.
//   res.send({message:'hello'});
// });

server.listen(8080, ()=>{
  console.log('server is running on 8080')
})