const MongoClient = require('mongodb').MongoClient;
// console.log(MongoClient);

const url = 'mongodb://localhost:27017';

const dbName = 'kuazhu';

MongoClient.connect(url,{useNewUrlParser:true}, function(err, client) {
 
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  const col = db.collection('user');
  //增加数据
 /* col.insertMany([{connect:"i like dog"},{connect:"i like pig"}],function(err,result){
  	if(!err){
  		console.log(result);
  	}else{
  		console.log("error");
  	}
  })*/

  //查找数据
/*  col.find({connect:"i like dog"}).toArray(function(err,docs){
  	if(!err){
  		console.log(docs);
  	}else{
  		console.log("error");
  	}
  })

*/


//更改数据

/*col.updateOne({"connect":"i like dog"},{$set:{"connect":"i like dog very much"}},function(err,result){
	if(!err){
		console.log(result);
	}else{
		console.log("error");
	}
})*/


//删除数据
col.deleteOne({"connect":"i like dog very much"},function(err,result){
	if(!err){
		console.log("ok");
	}else{
		console.log("error");
	}
})

  // 自动关闭
  client.close();
  // console.log(db);
});
