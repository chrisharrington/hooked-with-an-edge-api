import express from 'express';
import cors from 'cors';

let app = express(),
	port = 8101;

app.use(cors());
app.use(express.static('static'));

app.listen(port, () => console.log(`Listening on ${port}...`));