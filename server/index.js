const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection with direct URL
mongoose.connect('mongodb://localhost:27017/wearly', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB database connection established successfully');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// User Schema
const userSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  collegeName: { type: String, required: true },
  collegeEmail: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('/api/users/signup', async (req, res) => {
  try {
    const { phoneNumber, firstName, lastName, collegeName, collegeEmail } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ 
      $or: [{ phoneNumber }, { collegeEmail }] 
    });

    if (existingUser) {
      return res.status(400).json({ 
        error: 'User with this phone number or email already exists' 
      });
    }

    // Create new user
    const newUser = new User({
      phoneNumber,
      firstName,
      lastName,
      collegeName,
      collegeEmail,
    });

    await newUser.save();

    res.status(201).json({ 
      message: 'User created successfully',
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
      }
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Error creating user' });
  }
});

// Add a simple GET route to test the server
app.get('/', (req, res) => {
  res.json({ message: 'Wearly API is running' });
});

// Fixed port number instead of environment variable
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 