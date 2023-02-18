//라우터안에서의 대표
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("서버첫파일임")

})

module.exports =router;