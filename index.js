const express = require('express'),
   app = express()

app.get('/',(req,res)=>{
    res.send("Hii");
})



   app.listen(process.env.PORT || 5000,()=>{
    console.log('App started');
})
