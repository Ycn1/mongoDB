const mongoose = require('mongoose');


const newSchema = new mongoose.Schema({
		  	author: {
		  		type:mongoose.Schema.Types.ObjectId,
		  		//关联到哪个集合
		  		ref:"User"
		  	},
		  	title:{
		  		type:String,
		  	},
		  	content:{
		  		type:String,
		  	},

		}); 
/*
newSchema.statics.findBlogs = function(query={},callback){
		this.find(query)
		.populate('author')
		.then((docs)=>{
			callback(null,docs);
		})
		.catch((e)=>{
			callback(e);
		})
	}*/

newSchema.statics.findBlogs = function(query={}){

	let promise = new Promise((resolve,reject)=>{
			this.find(query)
			.populate('author')
		
			.then((docs)=>{
				resolve(docs);
			})
			.catch((e)=>{
				reject(e);
			})
	})
	return promise;

		
}


const blogUser = mongoose.model('Blog', newSchema);


module.exports = blogUser;