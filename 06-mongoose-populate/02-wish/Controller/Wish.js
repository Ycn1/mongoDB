const WishModel = require('../Model/Wish2.js');

const swig = require('swig');

const querystring = require('querystring');

const Arrcolor = ['#f10','#ff6700','#ccc','#ff0','#f1f2f3'];


function getRandom(min,max)  {
	return Math.round(min + (max-min)*Math.random());
}
class Wish{


	index(req,res,...args){
		
		WishModel.find({},(err,data)=>{
			if(!err){
				let template = swig.compileFile(__dirname+'/../View/Wish/index.html');
				let html = template({
				   data:data
				});
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.end(html);	 
			}else{
				console.log(err);
			}
		})
	}

	del(req,res,...args){
		WishModel.remove({_id:args[0]},(err,data)=>{
			let result = {};

			if(!err){
				result = {status:0}

				let resultIson = JSON.stringify(result);
				res.end(resultIson);
			}
		})
	}


	add(req,res,...args){
		let body = '';

		req.on('data',(chunk)=>{
			body +=chunk;
		});
		req.on('end',()=>{
			let obj = querystring.parse(body);
			obj.color = Arrcolor[getRandom(0,Arrcolor.length-1)];

			WishModel.insertMany(obj,(err,docs)=>{
				let result = {};

				if(!err){
					result={
						status:0,
						data:docs[0]
					}
				}else{
					result={
						status:1,
						message:message
					}
				}

			let resultIson = JSON.stringify(result);
			res.end(resultIson);
			})
		});
	}
}

module.exports = new Wish();