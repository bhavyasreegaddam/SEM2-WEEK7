const express = require('express');
const cors = require('cors'); // Import CORS
const mongoose = require('mongoose'); // Import Mongoose

const app = express();

// Enable CORS for all routes
app.use(cors());

// For parsing application/json
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://bhavyasreegaddam3:Bhavya%4010@cluster-1.sc9ne.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...✅'))
.catch((err) => console.log(err));

// Define a Mongoose Schema for User
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create a Model based on the schema
const User = mongoose.model('User', userSchema);

// Example signup route
app.post('/signup', async (req, res) => {
  const { email, fullName, username, password } = req.body;

  // Validate if all fields are filled
  if (!email || !fullName || !username || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Email or Username already exists' });
    }

    // Create a new user document
    const newUser = new User({
      email,
      fullName,
      username,
      password, // In a real app, make sure to hash the password before saving
    });

    // Save user to the database
    await newUser.save();

    res.status(201).json({ message: 'Account created successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
