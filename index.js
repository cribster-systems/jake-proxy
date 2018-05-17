const express = require('express');
const cors = require('cors');
require('newrelic');

const app = express();
app.use(cors());

app.use('/:location_id', express.static('index.html'));

app.listen(8080, () => console.log('Proxy server listening on port 8080!'));