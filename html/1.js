const express = require('express')
const path = require('path');
const PORT = 1488;
const ROOT = path.join(__dirname);

const app = express();

app.use('/static', express.static(path.join(ROOT, 'static')));
app.get('/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    res.sendFile(path.join(ROOT, id + '.html'));
});

app.get('*', (req, res) => {
    res.send('404 ERROR')
});

app.listen(PORT, () => console.log('Server has started!'))