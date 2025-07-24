const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({ 
    name: 'Jeff Godblum', 
    // Uncomment the line below to simulate the NewPersonSchema response
    favorite_date: "October 22, 1952",
    facts: {
      birth_date: "October 22, 1952",
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});