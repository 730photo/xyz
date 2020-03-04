const express = require('express');
// bodyParser lets us add a body to our request
const bodyParser = require('body-parser');
// other servers can make request, not just yours
const cors = require('cors');

const sendGrid = require('@sendgrid/mail');


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/api', (req, res, next) => {
    res.send('API Status: Running')
});

app.post('/api/email', (req, res, next) => {

    sendGrid.setApiKey('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');

    const msg = {
        to: 'lamar.reginald@gmail.com',
        from: 'req.body.email',
        subject: 'Website Contact',
        text: req.body.message
    }

    sendGrid.send(msg)
        .then(result => {

            res.status(200).json({
                succes: true
            });

        })
        .catch(err => {
            console.log('error: ', err)
            res.status(401).json({
                success: false
            });
        });
});

app.listen(3030, '0.0.0.0');