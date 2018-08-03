const mongoose = require('mongoose');


const newSchema = new mongoose.Schema({
		  	name :
		  		{
		  			type :String,
		  			required:[true,'用户名必须'],
		  			maxlength:[10,'最多十个字符'],
		  			minlength:[2,'最少两个字符']
		  		},

		  	phone:{
		  		type:String,
		  		validate:{
		  		validator:function(val){
		  			return /1[358]\d{9}/.test(val)
		  		},
		  		message:'{VALUE} 不是合法号码'
		  		}
		  	},
		  	age :
		  		{
		  			type :Number,
		  			deafult:10,
		  			min:[1,'最小是1'],
		  			max:[150,'最大150']
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
		}); 




/*newSchema.methods.findMyBlogs = function(callback){
	this.model('Blog').find({author:this._id},(err,docs)=>{
	
			callback(err,docs);

	})

}
*/
newSchema.statics.findByPhone = function(phone,callback){
	this.findOne({phone:phone},(err,docs)=>{
		if(!err){
			callback(err,docs);
		}else{
			callback(err);
		}
		
	})
}

newSchema.statics.findAllContent = function(title,callback){

	this.findOne({title:title},(err,docs)=>{
		console.log(this);
	})

}
const UserModel = mongoose.model('User', newSchema);

module.exports = UserModel;