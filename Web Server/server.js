let fs = require("fs");
let http = require("http");
let path = require("path");
let url = require("url");

http.createServer(function(req,res){
    let parsed = url.parse(req.url);
    let filename = path.parse(parsed.pathname);

    filen = filename.name == ""?"index":filename.name;
    ext = filename.ext == ""?".html":filename.ext;
    dir = filename.dir == "/"?"":filename.dir+"/";
    page = filename.name == ""?"index.html":filename.name;

    f = (dir+filen+ext).replace("/","");

    const mimeTypes = {
        '.html':'text/html',
        '.js':'text/javascript',
        '.css':'text/css',
        '.png':'image/png',
        '.jpg':'image/jpg',
        '.gif':'image/gif'
    };

    if(f){
        fs.readFile(f,function(err,data){

            if(page){
                if(mimeTypes.hasOwnProperty(ext)){
                    res.writeHead(200, {'Content-Type': 'mimeTypes.'+ext});
                    res.write("<script>var page='"+filen+"';</script>");
                    res.end(data,'utf-8');
                }
            }
        })
    }
    
}).listen("8080")