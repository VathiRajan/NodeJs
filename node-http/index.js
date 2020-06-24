const http = require('http');
const hostname = 'localhost';
const fs = require('fs');
const path = require('path');//Read and write files in local system
const port = 3000;
const server = http.createServer((req, res) => {
    console.log("Request for the " + req.url + " by method " + req.method);

    if (req.method == 'GET') {
        var fileUrl;
        if (req.url == '/') fileUrl = '/index.html';
        else fileUrl = req.url;
        var filepath = path.resolve('./public/' + fileUrl);
        const fileExt = path.extname(filepath);
        if (fileExt == '.html') {
            fs.exists(filepath, (exists) => {
                if (!exists) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html><body><h1>file does not exist = ' + fileUrl + 'not found</h1></body></html>',)

                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filepath).pipe(res);
            })
        }
        else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1> Error 404 - file is not HTML = ' + fileUrl + 'please use HTML </h1></body></html>')

        }
    }

})
server.listen(port, hostname, () => {
    console.log(`Server running at ${hostname}`)
});