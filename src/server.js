const express = require('express');
const bodyParser = require('body-parser');
const referralRoutes = require('./routes/referral.routes');
const app = express();

app.use(bodyParser.json());

// Root URL response
app.get('/', (req, res) => {
  res.send('Welcome to Accredian Backend API');
});

app.use('/api', referralRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
