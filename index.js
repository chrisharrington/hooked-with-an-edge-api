import express from 'express';

let app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
	res.send('Hello, world!');
});

app.listen(8081, () => console.log('Listening on 8081...'));