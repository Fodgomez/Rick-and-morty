const http = require('http');
const getCharById = require('./Controllers/getCharById');
const getCharDetail = require('./Controllers/getCharDetail');
const PORT = 3001;

http.createServer((req, res)=>{
    res.setHeader("Acess-control-Allow-Origin","*");
    const id = (req.url.split("/").pop());
    
    if(req.url.includes("onsearch")){
        getCharById(res, id);
    }

    if(req.url.includes("detail")){
        const id = (req.url.split("/").pop());
        getCharDetail(res, id);
    }
})
.listen(PORT, "localhost");


