

const chlib = require('./ChJSLibrary')

// Node.js の http モジュールを読み込む
const http = require('http');
const file = require('fs');

const firstHTML = process.argv.length > 2 ? process.argv[2] : "index.html";

const portNum = new String(process.argv.length > 3 ?  process.argv[3].toString() : "8000");

const currentDir = process.cwd();

// サーバーを生成
let myServer = http.createServer();

console.log("start");

function RequestFunction(req, res){
    // アクセス情報をターミナルに出力
    var url = (req.url.indexOf('.') < 0 ? currentDir + req.url + firstHTML :  currentDir + req.url );
    //if(!file.existsSync(url)){url = 'public' + url;}

    console.log(`url:${url}`);
    console.log(`method:${req.method}`);
    //console.log('load html:' + __dirname + "/" + firstHTML);

    const mimeType = chlib.GetMimeType(url);
    console.log("mimeType:" + mimeType);

    console.log(file.existsSync(url) ? "Load True" : "Load False");
    
    var cordding = (mimeType.split("/")[0] == "text" ? "utf-8" : "Binary");
    console.log(cordding);
    


        file.readFile(url,cordding , function(err, data)
        {
            // ファイル読み込みエラーが発生した場合
            if (err)
            {
                // ファイルが存在しない場合のHTTPステータスコード「404」を、HTTPヘッダに入れる
                // 文字を表示するため「text/plain」に設定する
                res.writeHead(404, {'Content-Type': 'text/plain'});
                // 本文（Body部）に文字を表示する
                res.write('Page Not Found!');
                return res.end();
            }
            
            if(url.endsWith(".md"))
            {
                data = chlib.ParseMarkDown(data);
            }

            // 成功した場合のHTTPステータスコード「200」を、HTTPヘッダに入れる
            // HTMLを表示するため「text/html」に設定する
            res.writeHead(200, {'Content-Type': mimeType});
            // dataに読み込んだファイル内容が入っているので、そのまま表示する
            
            res.end(data,cordding);
        });


};

myServer.on('request',RequestFunction); 

myServer.listen(port = Number.parseInt(portNum,10));


console.log("wait");