const http = require('http');
const PORT = 3001;

http.createServer((req, res)=>{
    res.setHeader("Acess-control-Allow-Origin","*");
    if(req.url.includes("rickandmorty/character")){
        console.log(req.url.split("/"));
        const id = (req.url.split("/").pop());
        const character = character.filter(char=> char.id === Number(id));

        res.writeHead(200, {'Content-Type': 'application/json'}).end(JSON.stringify(character[0])); 
    }   
})
.listen(PORT, "localhost");


