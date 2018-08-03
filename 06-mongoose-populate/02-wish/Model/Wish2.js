const mongoose = require('mongoose');


const newSchema = new mongoose.Schema({
		  	
		  	content:{
		  		type:String,
		  	},
		  	color:{
		  		type:String,
		  	},

		}); 


const WishModel = mongoose.model('Wish', newSchema);


module.exports = WishModel;