const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

// Local MongoDB connection URI
const localUri = 'mongodb://localhost:27017/mydatabase'; // Replace 'mydatabase' with your database name

mongoose.connect(localUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to local MongoDB'))
.catch(err => console.error('Could not connect to local MongoDB:', err));

const teamSchema = new mongoose.Schema({
  name: String,
  position: String,
  imageLink: String
});

const Team = mongoose.model('Team', teamSchema);

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/teams', async (req, res) => {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (err) {
    console.error('Error fetching teams:', err);
    res.status(500).send('Internal server error');
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
