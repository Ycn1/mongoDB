const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ycn',{useNewUrlParser: true});

const db = mongoose.connection;

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
		

		const user2 = new User({name:"Anna2",age:18,sex:"male"});
		const user = new User({name:"Alisa",age:19,sex:"male"});
		const user1 = new User({name:"Anna",age:18,sex:"male"});

		// user.save();
		// user1.save();
		// user2.save();

		/*user.save(function (err, user) {
			    if (err) return console.error(err);
			    
		  });*/

		  //查找
	/*	  User.find({name:'Alisa'},function(err,result){

		  	if(!err){
		  		console.log(result );
		  	}else{
		  		console.log("find error...")
		  	}
		  })
*/
		//更新
		 /* User.update({name:'Alisa'},{name:"Tommy"},function(err,result){

		  	if(!err){
		  		console.log(result );
		  	}else{
		  		console.log("find error...")
		  	}
		  })*/

		  //删除
		  User.remove({name:'Tommy'},(err,result)=>{

		  	if(!err){
		  		console.log(result );
		  	}else{
		  		console.log("find error...")
		  	}
		  })
	}
})