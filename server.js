const express = require('express');
const html_routes = require('./routes/html_routes');
const api_routes = require('./routes/api_routes');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', api_routes);
app.use('/', html_routes);

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});