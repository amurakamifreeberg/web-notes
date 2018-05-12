const notes = [
  'http is a protocol',
  'http requests have a url, method, header, and body'
];

const express = require('express')
const app = express()

// app.get('/', (req, res) => res.send('<h1> Web Notes: <h1>'))
app.get('/', (req, res) => {
  res.render('notes', { notes: notes });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.set('view engine', 'ejs');
app.use('/css', express.static('css'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/notes', (req, res) => { 
  notes.push(req.body.note);
  res.redirect('/');
});


