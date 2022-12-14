const router = require('express').Router() ;
//import todo model



const todoItemsModel = require('../models/todoItems') ;


//let's create our first route  -- we will add todo item to our database

router.post('/api/item', async (req,res)=>{
    try{
        const newItem = new todoItemsModel({
            item:req.body.item
        })
        //save this item in database
        const saveItem = await new Item.save()
        res.status(200).json('Item Added Successfully.') ;
    }catch(err){
        res.json(err) ;
    }
})

//export router
module.exports = router ;