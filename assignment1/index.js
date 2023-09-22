/* eslint-disable no-console */
const http = require('http');

const server = http.createServer((req, res) => {
    res.end();
});

const PORT = 8080;

server.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
