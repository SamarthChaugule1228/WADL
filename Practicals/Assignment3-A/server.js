const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 1800;

// MIME Types
const mimeType = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.txt': 'text/plain'
};

http.createServer((req, res) => {

    // 👉 HOME PAGE → show file list
    if (req.url === "/") {

        let files = fs.readdirSync(__dirname);
        let list = "<h1>Files:</h1><ul>";

        files.forEach(file => {
            let fullPath = path.join(__dirname, file);

            if (fs.statSync(fullPath).isFile()) {
                list += `<li><a href="/${file}">${file}</a></li>`;
            }
        });

        list += "</ul>";
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(list);
    }

    // 👉 OPEN FILE
    else {

        let file = req.url.slice(1);  // remove "/"
        let filePath = path.join(__dirname, file);

        fs.readFile(filePath, (err, data) => {

            if (err) {
                res.writeHead(404);
                res.end("File Not Found");
            } else {
                let ext = path.extname(filePath);
                res.writeHead(200, {
                    "Content-Type": mimeType[ext] || "text/plain"
                });
                res.end(data);
            }

        });
    }

}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});