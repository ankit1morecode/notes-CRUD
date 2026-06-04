let express = require("express");
let noteModel = require("./models/note.model.js");

let app = express();
app.use(express.json());

/*
* POST /notes
* GET /notes
* PATCH /notes/:id
* DELETE /notes/:id
*/

//GET /notes
app.get("/notes",async (req,res)=>{
    let data = await noteModel.find();
    console.log(data);
    res.status(202).json({
        message : "data fetched"   
    });
})
//POST /notes
app.post("/notes",async (req,res)=>{
    let data = req.body;
    await noteModel.create({
        title : data.title,
        description : data.description
    })
    res.status(201).json({
        message : "Note Created"
    })
})
//PATCH /notes/:id
app.patch("/notes/:id", async (req,res)=>{
    let {id} = req.params;
    let data = req.body;
    await noteModel.findByIdAndUpdate(id,{
        title : data.title,
        description : data.description
    })
    res.status(200).json({
        message : "update succesfully"
    })
})
//DELETE /notes/:id
app.delete("/notes/:id",async (req,res)=>{
    let {id} = req.params;
    await noteModel.findByIdAndDelete(id);
    res.status(204).json({
        message : "Deleted Successfully"
    })
})

module.exports = app;