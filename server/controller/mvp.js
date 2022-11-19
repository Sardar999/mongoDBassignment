let express = require('express');
let router = express.Router();
let mongoose = require('mongoose'); // npm i mongoose
// connect with book model
let MVPAward = require('../models/mvp');
/* CRUD Operation */

module.exports.displayMVPAward = (req,res,next)=>{
    MVPAward.find((err, MVP)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(MVPAward);
            res.render('/MVPAward',{
                title:'Awards',
                MVPList:MVP
            })
        }
    });
}

module.exports.displayAddPage = (req,res,next)=> {
    res.render('mvp/add', {title:'Add Player'})
}

module.exports.processAddPage = (req,res,next)=> {
    let newMVP = MVPAward ({
        "name":req.body.name,
        "age":req.body.age,
        "team":req.body.team,
        "championships": req.body.championships,
        "history":req.body.history

    });
    MVPAward.create(newMVP,(err,mvp) => {
     if(err)
    {
        console.log(err);
        res.end(err);
    }
    else
    {
        res.redirect('/');
    }
    })
}

module.exports.displayEditPage = (req,res,next)=> {
    let id = req.params.id;
    MVPAward.findById(id,(err,mvpToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('mvp/edit',{title:'Edit Player', MVP:mvpToEdit});
        }
    });
}

module.exports.processEditPage = (req,res,next)=> {
    let id=req.params.id;
    let updateMVP = MVPAward({
        "_id":id,
        "name":req.body.name,
        "age":req.body.age,
        "team":req.body.team,
        "championships": req.body.championships,
        "history":req.body.history
    })
    MVPAward.updateOne({_id:id},updateMVP,(err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/MVPAward');
        }
    });
}

module.exports.performDelete = (req,res,next)=> {
    let id =req.params.id;
    MVPAward.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        { 
            res.redirect('/MVPAward');
        }
    });
}