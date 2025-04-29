const mongoose = require("mongoose")

const schema = mongoose.Schema ({
    title: {type:String,required:true},
    director: {type:String ,required:true},
    genre: {type:String ,required:true},
    releasedYear: {type:Number},
    availableCopies: {type: String ,required:true}

})

const movieModel = mongoose.model("movies",schema);

module.export = movieModel;