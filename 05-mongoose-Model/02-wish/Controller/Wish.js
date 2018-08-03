const wish = require('../Model/Wish.js');

const swig = require('swig');

const querystring = require('querystring');


class Wish{


	index(req,res,...args){
		wish.get((err,data)=>{
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
		});
	}

	del(req,res,...args){
		wish.remove(args[0],(err,data)=>{
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

			wish.add(obj,(err,data)=>{
				let result = {};
				if(!err){
					result={
						status:0,
						data:data
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
		})
	}
}

module.exports = new Wish();