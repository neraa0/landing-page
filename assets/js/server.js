const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/submit-contact', (req, res) => {
    const { name, email, message } = req.body;

    // Save the data to a file (or you could save it to a database)
    const data = `Name: ${name}, Email: ${email}, Message: ${message}\n`;
    fs.appendFile('contact_messages.txt', data, (err) => {
        if (err) {
            console.error('Error saving message:', err);
            res.status(500).send('Error saving message');
            return;
        }
        res.send('Message received and saved!');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
