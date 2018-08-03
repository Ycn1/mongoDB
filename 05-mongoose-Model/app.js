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
	

		//新建一个Schema对象
	/*	const newSchema = new mongoose.Schema({
		  	name :
		  		{
		  			type :String,
		  		},
		  	age :
		  		{
		  			type :Number,
		  			deafult:10
		  		},
		  	sex :
		  		{
		  			type :String,
		  			enum :["male","female"]
		  		},

		  	locked :{
		  		type:Boolean
		  	},
		  	createdAt :{
		  		type:Date,
		  		deafult:Date.now
		  	},
		  	friends :{
		  		type:Array,
		  	}


		}); */

		//新建一个模型, 数据库里面集合的名称是第一个参数的小写形式,并且是复数形式
		// const User = mongoose.model('User', newSchema);

	

		//insertMany可以插入一个，当出入多个的时候需要写成数组形式
	/* User.insertMany({
	 	name:"Alisa",
	 	age:30,
	 	sex:"male",
	 	createdAt:Date(),
	 	friends:["Tom","Anna"]});
		
		
	}*/


	// let date = Date.now();

	// console.log(date.getFullYear() '-' date.getMonth() '-' date.getDate() '-' date.getHours() "-" date.getSeconds());
	//findById
	// console.log(moment(Date()).format("YYYY '-' MM '-' DD HH:MM:SS") );

/*	blogModel.insertMany({

		author: "5b62fac6dc2d89173ca35c2f",
		title:"I am title2",
		content:"33333333333"
	},(err,result)=>{
		if(!err){
			console.log(result);
		}else{
			console.log()
		}
	})
*/

	/*UserModel.insertMany({
		name:"Lina",
		age:120,
		phone:13584444444,
		sex:'female',
		locked:false,
		friends:['Alisa','Anna']
	},(err,result)=>{
		if(!err){
			console.log(result);
		}else{
			console.log(err);
		}
	})
*/

	/*UserModel.findById('5b62d007928a0a42ac6d6b67',(err,docs)=>{
		if(!err){
			console.log(moment(docs.createdAt).format('YYYY - MM -DD  HH:MM:SS'));
		}else{
			console.log(err);
		}
	})
*/

/*UserModel.findOne({name:"Rose"},(err,docs)=>{
	if(!err){
		console.log(docs._id);
		docs.findMyBlogs((err,docs)=>{
			console.log(docs)
		})
	}
	
})*/

UserModel.findByPhone(13584444444,(err,docs)=>{
	if(!err){
		console.log(docs);
	}else{
		console.log("findPhone Error...");
	}
	
})



})