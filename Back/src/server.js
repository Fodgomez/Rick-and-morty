const http = require('http');
const getCharById = require('./Controllers/getCharById');
const getCharDetail = require('./Controllers/getCharDetail');
const PORT = 3001;

http.createServer((req, res)=>{
    res.setHeader("Access-control-Allow-Origin","*");
    
    if(req.url.includes("onsearch")){
        const id = (req.url.split("/").pop());
        getCharById(res, id);
    }

    if(req.url.includes("detail")){
        const id = (req.url.split("/").pop());
        getCharDetail(res, id);
    }
})
.listen(PORT, "localhost");



