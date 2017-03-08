const http = require('http');

const app = require('./app');
const controllers = require('./controllers');
const { host, port } = require(`../config/env/${ process.argv[2] || 'development' }.json`);

const server = http.createServer(app);

server.listen(port, host, () => {
    console.log(`listening on ${ host }:${ port }`);
});