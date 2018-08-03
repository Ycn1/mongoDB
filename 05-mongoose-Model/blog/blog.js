const mongoose = require('mongoose');


const newSchema = new mongoose.Schema({
		  	author: {
		  		type:mongoose.Schema.Types.ObjectId,
		  	},
		  	title:{
		  		type:String,
		  	},
		  	content:{
		  		type:String,
		  	},

		}); 

const blogUser = mongoose.model('Blog', newSchema);


module.exports = blogUser;