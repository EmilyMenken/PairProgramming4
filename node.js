import express from 'express';

const node = express();

node.use(express.static('public'));


node.get('/', (req,res) => {

res.sendFile(`${import.meta.dirname}/views/index.html`);
})

node.listen(3000, () =>{
    console.log('Server running at http://localHost:3000')
})