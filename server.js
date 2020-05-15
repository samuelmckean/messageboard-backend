const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const messages = [
  {text: 'some text', owner: 'Sam'}, 
  {text: 'other message', owner: 'Juan'}
];

const api = express.Router();

api.get('/messages', (req, res) => {
  res.json(messages);
});

api.post('/messages', (req, res) => {
  console.log(req.body);
  messages.push(req.body);
  res.sendStatus(200);
});

app.use('/api', api);

app.listen(3000, () => {
  console.log('server is running on port 3000')
});