const mongoose = require('mongoose');

const moment = require('moment');

const blogModel = require('./blog/blog.js');

const UserModel = require('./blog/user.js');


mongoose.connect('mongodb://localhost:27017/ycn',{useNewUrlParser: true});

const db = mongoose.connection;

db.on('err',()=>{
	throw err;
})

db.once('open',()=>{
	/*
	 blogModel.findOne({title:"I am title"},(err,blog)=>{
	 	if(!err){
	 		
		 		UserModel.findById(blog.author,(err,user)=>{
		 		if(!err){
		 			let result = {};
		 			result.blog = blog;
		 			result.user = user;
		 			console.log(result);
		 		}else{
		 			console.log(err);
		 		}
		 	})
	 	}else{
	 		console.log(err);
	 	}
	 	
	 	
	 })*/


	/*blogModel
			.findOne({title:"I am title"})
			.populate('author')
			.then((docs)=>{				
					console.log(docs);
			})
	*/

blogModel.findBlogs({title:"I am title"}).then((docs)=>{
	console.log(docs);
})
})