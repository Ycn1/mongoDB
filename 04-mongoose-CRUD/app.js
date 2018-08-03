const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ycn',{useNewUrlParser: true});

const db = mongoose.connection;

const getname = ['Alisa','Anna','Lili','Tina','Harry'];


function getName(){
	return getname[Math.ceil(getRandom(0,getname.length-1))];
}

console.log(getName());
function getRandom(min,max)  {
	return Math.round(min + (max-min)*Math.random());
}

function getSex (){
	let num = getRandom(0,1);
	if(num > 0.5){
		return "male";
	}else{
		return "female";
	}
}
getName[parseInt(getRandom(0,getName.length-1))];
console.log(getSex());
db.on('err',()=>{
	throw err;
})

db.on('open',(err)=>{
	if(!err){

		//新建一个Schema对象
		const newSchema = new mongoose.Schema({
		  	name: String,
		  	age:Number,
		  	sex:String

		}); 

		//新建一个模型, 数据库里面集合的名称是第一个参数的小写形式,并且是复数形式
		const User = mongoose.model('User', newSchema);

		// const user = new User({name:"Alisa",age:16,sex:"male"});

		//insertMany可以插入一个，当出入多个的时候需要写成数组形式
		// let promise = User.insertMany({name:"Alisa",age:30,sex:"male"});
		// let promise = User.insertMany([{name:"Alisa",age:20,sex:"male"},{name:"Rose",age:25,sex:"male"}]);
		
		/*promise
			.then((docs)=>{
				console.log("success...",docs);
			})
			.catch((err)=>{
				console.log(err);
			})*/
		//save()方法会返回一个Promise对象，然后就可以调用then方法
		 // const user = new User({name:"Alisa3",age:19,sex:"male"});

		 // user.save((err,docs)=>{});

		 //也可以
	/*	 const user = new User({name:"Anna2",age:19,sex:"male"});


		 let promise =  user.save();

		 promise
		 		.then((docs)=>{
					console.log("success...",docs);
				})
				.catch((err)=>{
					console.log(err);
				})*/
		 	
		//create方法
		//可以插入一个
		/*User.create({name:"Anna3",age:19,sex:"male"},(err,docs)=>{
			if(!err){
				console.log(docs);
			}else{
				console.log(err);
			}
		})*/


		//也可以插入两个，不必写成数组形式
		/*User.create({name:"Anna3",age:19,sex:"male"},{name:"Anna4",age:19,sex:"male"},(err,docs)=>{
			if(!err){
				console.log(docs);
			}else{
				console.log(err);
			}
		})*/


		// const user = new User({})
		 // let promise =  User.insertMany({name:getName(),sex:getSex(),age:getRandom(10,60)});

		 /*User.find({name:"Alisa"},(err,docs)=>{
		 	if(!err){
		 		console.log(docs);
		 	}else{
		 		console.log(err);
		 	}
		 })*/

		  User.find({age:{$lt:17}},(err,docs)=>{
				 	if(!err){
				 		console.log(docs);
				 	}else{
				 		console.log(err);
				 	}
				 })

	/*	 User.findOne({age:{$lt:19}},{name : 1,_id:0},(err,docs)=>{
				 	if(!err){
				 		console.log(docs);
				 	}else{
				 		console.log(err);
				 	}
				 })*/


		 /*	User.update({age:66},{age:26},(err,docs)=>{
			if(!err){
				console.log(docs);
			}else{
				console.log(err);
			}
		})*/
		//只更改一个
	/*	User.update({age:{$gt:20}},{age:66},(err,docs)=>{
			if(!err){
				console.log(docs);
			}else{
				console.log(err);
			}
		})*/

	//满足条件的全部更改
		/*User.update({age:18},{age:66},{multi:true},(err,docs)=>{
			if(!err){
				console.log(docs);
			}else{
				console.log(err);
			}
		})*/

	User.remove({age:66},(err,result)=>{
		if(!err){
			console.log(result);
		}else{
			console.log(err);
		}
	})

	//调用setOptions方法之后返回的是一个promise，然后就可以继续调动then 方法
	/*User.remove({age:66})
						.setOptions({single:true})
						.then((err)=>{
							console.log(err);
						})

*/
	/*User.deleteOne({age:17},(err,docs)=>{
		if(!err){
				console.log(docs);
			}else{
				console.log(err);
			}
	})*/
	}
})