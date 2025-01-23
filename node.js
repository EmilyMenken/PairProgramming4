import express from 'express';

const node = express();

node.use(express.static('public'));


/* Unable to get CSS connected to HTML when running through the node app*/
node.get('/', (req,res) => {
res.sendFile(`${import.meta.dirname}/views/index.html`);
})

node.listen(3000, () =>{
    console.log('Server running at http://localHost:3000')
})