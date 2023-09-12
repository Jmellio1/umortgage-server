import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
    let collection = await db.collection("umortgage");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
    let collection = await db.collection("umortgage");
    let query = {_id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  var valid = true;
  var message=" can not be null\n";

   if(!req.body.name||!req.body.email|| !req.body.status||!req.body.estimatedSaleAmount){
res.status(400).send({
    Message: 'Missing feild/ nulls are not allowed',

});
   }else{
       var commission;
       if(req.body.status==="Unqualified"){
           commission=0;
       }else{
           commission=req.body.estimatedSaleAmount*.05;
       }
    let newDocument = {
        name: req.body.name,
        email:req.body.email,
        status:req.body.status,
        estimatedSaleAmount:req.body.estimatedSaleAmount,
        estimatedCommission:commission,

    };
    let collection = await db.collection("umortgage");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);}
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };
    var commission;
    if(req.body.status==="Unqualified"){
        commission=0;
    }else{
        commission=req.body.estimatedSaleAmount*.05;
    }
    const updates =  {
        $set: {
            name: req.body.name,
            email:req.body.email,
            status:req.body.status,
            estimatedSaleAmount:req.body.estimatedSaleAmount,
            estimatedCommission:commission
        }
    };

    let collection = await db.collection("umortgage");
    let result = await collection.updateOne(query, updates);

    res.send(result).status(200);
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("umortgage");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
});

export default router;