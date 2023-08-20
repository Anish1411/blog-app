// how the database should be created 
//in this how category DB created like what all things it required for category

const mongoose = require("mongoose")
                                               
const CategorySchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
   
},
    { timestamps: true }      //search
);

module.exports = mongoose.model("Category", CategorySchema);