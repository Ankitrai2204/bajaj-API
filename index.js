const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Please hire me in your company');
  });
  
// POST route for /bfhl
app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data;
    const user_id = 'Ankit_kumar_rai';
    const email = 'ankit2102.be21@chitkara.edu.in';
    const roll_number = '2110992102';
    
    const odd_numbers = data.filter(item => !isNaN(item) && parseInt(item) % 2 !== 0);
    const even_numbers = data.filter(item => !isNaN(item) && parseInt(item) % 2 === 0);
    const alphabets = data.filter(item => typeof item === 'string' && item.match(/[a-zA-Z]/)).map(item => item.toUpperCase());

    const response = {
      is_success: true,
      user_id: user_id,
      email: email,
      roll_number: roll_number,
      odd_numbers: odd_numbers,
      even_numbers: even_numbers,
      alphabets: alphabets
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});