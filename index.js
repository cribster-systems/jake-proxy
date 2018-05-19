const express = require('express');
const cors = require('cors');
require('newrelic');
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

const app = express();
app.use(cors());

// if (cluster.isMaster) {
//   console.log(`Master ${process.pid} is running`);

//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//   });
  
// } else {

  app.use('/:location_id', express.static('index.html'));
  app.get('/', (req, res) => {
    res.sendStatus(200);
  });

  app.listen(8080, () => console.log('Proxy server listening on port 8080!'));
// }