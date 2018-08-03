const fs = require('fs');
const uuidv1 = require('uuid/v1');
const path = require('path');
// const MongoClient = require('mongodb').MongoClient;
// console.log(MongoClient);

// const url = 'mongodb://localhost:27017';
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ycn',{useNewUrlParser: true});

const db = mongoose.connection;

// const dbName = 'hjf';

let getDb = (callback)=>{
	MongoClient.connect(url,{useNewUrlParser:true}, function(err, client) {
 
	  	console.log("Connected successfully to server");

	  	const db = client.db(dbName);

	  	callback(db,client);
	})
}

const Arrcolor = ['#f10','#ff6700','#ccc','#ff0','#f1f2f3'];
function getRandom(min,max){
	return Math.round(min + (max-min)*Math.random());
}


db.on('open',(err)=>{

	if(!err){
		const newSchema = new mongoose.Schema({
		  	content: String,
		  	
		  	color:String

			_id:Number,
		}); 
		const User = mongoose.model('User', newSchema);


		let add = (options,callback)=>{

			 options.color = 'rgb('+getRandom(0,255)+','+getRandom(0,255)+','+getRandom(0,255)+')';
		 	 options._id = uuidv1();

		 	 User.insertMany(options,function(err,result)=>{
			 	 	if(!err){
						// console.log(result);
			  				callback(null,options);

					}else{
						// console.log("error");
			  				callback(err);

					}
		 	 })

		}


		let get =(options,callback)=>{
			User.find(options,(err,result)=>{
				if(!err){
					// console.log(result);
		  			callback(null,options);

				}else{
					// console.log("error");
		  			callback(err);

				}
			})

		
		   
		}

		let remove = (id,callback)=>{

			User.remove({-id:id},(err)=>{
				if(!err){
					// console.log(result);
		  			callback(null,options);

				}else{
					// console.log("error");
		  			callback(err);

				}
			})

	}
		


}
 


	}

})
/*let add = (options,callback)=>{
	

	getDb((db,client)=>{
		 const col = db.collection('wish');
		 options.color = 'rgb('+getRandom(0,255)+','+getRandom(0,255)+','+getRandom(0,255)+')';
		 options._id = uuidv1();
		 // console.log(options._id);

		 col.insertOne(options,function(err,result){
			if(!err){
					// console.log(result);
		  		callback(null,options);

				}else{
					// console.log("error");
		  		callback(err);

				}
				 client.close();
		 })
		  
	})

}*/

let get =(callback)=>{


	getDb((db,client)=>{
		 const col = db.collection('wish');
		 col.find({}).toArray(function(err,docs){
		  	if(!err){
		  		// console.log(docs);
		  		callback(null,docs);
		  	}else{
		  		// console.log("error");
		  		callback(err);

		  	}
		  	client.close();

		  })
		   
	})
}

let remove = (id,callback)=>{

	getDb((db,client)=>{
		 const col = db.collection('wish');
		 col.deleteOne({_id:id},function(err,result){
			if(!err){
				console.log(id);
		  		callback(null,result);

				// let newData = obj.filter((val)=>{
				// 		return val['id'] != id;
				// 	})
			}else{
				// console.log("error");
		  		callback(err);

			}
			client.close();
		})

	})
		


}

remove('41a31330-8f1d-11e8-aae5-c7179a7c15c7',(err,data)=>{
	if(!err){
		console.log(data);
	}else{
		console.log("error");
	}
})

module.exports = {

	get:get,
	add:add,
	remove:remove


}