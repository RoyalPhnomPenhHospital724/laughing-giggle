const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from laughing-giggle!' });
});

app.listen(PORT, () => {
  console.log(`laughing-giggle listening on http://localhost:${PORT}`);
});
