let express = require('express');
let router = express.Router();
let mongoose = require('mongoose'); // npm i mongoose

// connect with book model

let MVPAward = require('../models/mvp');

router.get('/',(req,res,next)=>{
    MVPAward.find((err, MvpAward)=>{
       if(err)
       {
            return console.error(err);
       }
       else
       {
           res.render('mvp', {
               title:'MVP-List',
               MVPAward:MvpAward
       })
     }
    });
}); 


module.exports=router;