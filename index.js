const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

//Configure Port for dev & Prod environment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
