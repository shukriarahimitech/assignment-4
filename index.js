import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { read, readFileSync } from 'fs';
import path from 'path';
const app = express();

const PORT =  3000;

const proverbsJSON = readFileSync(path.join(__dirname, 'proverbs.json'), 'utf-8');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let data = JSON.parse(proverbsJSON);
app.use(cors());
app.post('/proverbs', (req, res) => {
    switch (req.body.choice) {
        case 'GET':
          data = JSON.parse[0]
        
    }
  const { proverb } = req.body;
  if (proverb) {
    proverbs.push(proverb);
    res.status(200).json({ message: 'Proverb added successfully!' });
  } else {
    res.status(400).json({ message: 'Proverb is required!' });
  }
} 
);
app.get('/proverbs', (req, res) => {
  res.status(200).json(proverbs);
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
