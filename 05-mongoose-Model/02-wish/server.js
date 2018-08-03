 const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('./mime.json');
const querystring = require('querystring');
const url = require('url');

const wish = require('./Model/Wish.js')
var swig  = require('swig');

 const  server = http.createServer((req,res)=>{
    // res.setHeader('Content-Type', 'text/html;charset=UTF-8');

    let pathname = url.parse(req.url,true).pathname;

    let filename = req.url;
    //显示首页
   if(pathname.startsWith('/static/')){//处理静态资源

        let filePath = path.normalize(__dirname + pathname);
        let fileExtName = path.extname(filePath);

        fs.readFile(filePath,(err,data)=>{
            if(!err){
                let mimeType = mime[fileExtName] || 'text/plain';
                res.setHeader('Content-Type', mimeType+';charset=UTF-8');
                res.end(data);
            }else{
                res.setHeader('Content-Type', 'text/html;charset=UTF-8');
                res.statusCode = 404;
                res.end('<h1>页面走丢了。。。。</h1>')
            }
        });
    }else{
        let paths = pathname.split('/');
        let controller = paths[1] || 'Wish';
        let action = paths[2] || 'index';
        let args = paths.slice(3);
        let model;
        try{
            model = require('./Controller/'+controller);
        }catch(err){
            console.log(err);
            res.setHeader('Content-Type', 'text/html;charset=UTF-8');
            res.statusCode = 404;
            res.end('<h1>页面走丢了。。。。</h1>')   
            return;     
        }
        
        if(model[action]){
            model[action].apply(null,[req,res].concat(args));
        }

    }
        
    });

    

 server.listen(3000,'127.0.0.1',()=>{
    console.log('server  running at 127.0.0.1:3000');
 });
   

