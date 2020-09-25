const express = require('express');
const { readFile } = require('fs').promises;
const app = express()


//define the directory for static files
app.use(express.static(__dirname + '/'));

app.get('/', async (req, res) => {

  res.send(await readFile('./index.html', 'utf8'));
})

app.get('/users', (req, res) => {
  res.send('Users Page')
  console.log('Users page')

})

app.listen(process.env.PORT || 3000, () => console.log(`Server Started on http://localhost:${process.env.PORT || 3000}`))