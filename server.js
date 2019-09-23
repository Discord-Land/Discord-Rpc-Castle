const express = require('express');
const app =express();
const fs = require('fs');
const cors = require('cors');
let current = []
app.use(express.json())
app.use(cors())
app.post('/current' ,  (req,res)=>{
    current = [];
    if(req.body.data){
        res.status(200)
        current.push(req.body.data)
        const json = JSON.stringify(current)
        fs.writeFile('current.json', json, (err) => {
            if (err) throw err;
        });
    }
    else{
        console.log('error')
    }
    
})

app.listen(37583 , ()=>{
    console.log('listining on port 37583')
})
