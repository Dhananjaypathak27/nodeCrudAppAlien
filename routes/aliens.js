const express = require('express')
const routes = express.Router()
const Alien = require('../models/alien')

routes.get('/',async(req,res)=>{
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    }
    catch(err){
        res.send('Error'+err)
    }
})

routes.patch('/:id',async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id);
        alien.sub = req.body.sub;
        const a1 = alien.save();
        res.json(a1);
    }catch(err){
        res.send("error")
    }
})

routes.delete('/:id',async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id);
        var a1 = await alien.deleteOne()
        var obj = {};
        obj.alien = a1;
        obj.message = "alien removed successfully!!.."
        res.json(obj);

    }
    catch(err){
        res.send("error")
    }
})

routes.get('/:id',async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }
    catch(err){
        // res.send('Error'+err);
        var obj = {};
        obj.errorMessage = "error occured"+err;
        res.json(obj)
    }
})

routes.post('/',async(req,res)=>{
   
        const alien = new Alien({
            name : req.body.name,
            tech: req.body.tech,
            sub: req.body.sub
        })

    try{

        const a1 = await alien.save()
        res.json(a1)
    }
    catch(err){
        res.send('err')
    }
})

module.exports = routes;