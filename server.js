"use strict";

global._ = require('lodash');
global.Promise = require('bluebird');

const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const config = require('./lib/config')();
const feature1 = require('./lib/feature1')();


(() => {
    const app = express();

    app.use('/dist', express.static(path.join(__dirname, './client/dist')));
    app.use(bodyParser.json());

    app.get('/api/feature1', (req, res) => feature1
        .someAction()
        .then(() => res.json({})));

    app.get('*', (req, res) => fs
            .createReadStream(path.join(__dirname, './client/index.html'))
            .pipe(res));

    app.listen(config.PORT, () => console.log(`Server has been started on ${config.PORT}...`));
})();