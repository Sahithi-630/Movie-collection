const express = require("express");

const movieModel = require("../models/movieModel");

const routes = express.Router();

movie.get("/",(req,res)=>{
    try {
        const movie = await movieModel.find();
        return res.status(200).send({message:"Data fetched successfully"});
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:"Internal server error" });
    }
})

movie.post("/",(req,res)=>{
    try {
        const{title,director,genre,releasedYear,availableCopies}=req.body;
        if(!title || !director || !genre || !releasedYear || !availableCopies){
            return res.status(400).send({message:"Missing required fields"});
        }
        const newMovie = new  movieModel({
            title,director,genre,releasedYear,availableCopies
        })
        await newMovie.save();
        return res.status(201).send({message:"Movie added successfully"});
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:"Internal server error ",createdMovie:newMovie});
    }
})

movie.put("/:id",(req,res)=>{
    try {
        const{id}=req.params;
        if(!id){
            return res.status(400).send({message:"movie not found"});
        }
        const{title,director,genre,releasedYear,availableCopies}=req.body;
        (!title || !director || !genre || !releasedYear || !availableCopies){
            return res.status(400).send({message:"Missing required fields"});
        }
        const updateMovie = await movieModel.findByIdAndUpdate({_id:id},{title,director,genre,releasedYear,availableCopies});
        if(!newMovie){
            return res.status(404).send({message:"Not found"});
        }
        return res.status(200).send({message:"Book updated successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:"Internal server error"});
    }
})

movie.delete("/:id",(req,res)=>{
    try {
        const{id}=req.params;
        if(!id){
            return res.status(400).send({message:"movie not found"});
        }
        const{title,director,genre,releasedYear,availableCopies}=req.body;
        (!title || !director || !genre || !releasedYear || !availableCopies){
            return res.status(400).send({message:"Missing required fields"});
        }
        const deleteMovie = await movieModel.findByIdAndDelete({_id:id},{title,director,genre,releasedYear,availableCopies});
        if(!newMovie){
            return res.status(404).send({message:"Not found"});
        }
        return res.status(200).send({message:"Book updated successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:"Internal server error"});
    }
})

module.exports=movie;