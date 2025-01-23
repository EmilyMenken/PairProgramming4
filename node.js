import express from 'express';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) =>
    {
        //res.send('hello world');
        res.sendFile(`${import.meta.dirname}/views/index.html`);
    }
);

app.listen(3000, () =>
    {
        console.log('Server running at http://localhost:3000');
    }
);