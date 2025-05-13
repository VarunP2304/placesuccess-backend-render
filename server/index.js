
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// Add CORS options to allow requests from your Vercel domain
app.use(cors({
  origin: ['https://placement-success-platform.vercel.app/', 'https://placement-success-platform-git-main-varunp2304s-projects.vercel.app/'],
  credentials: true
}));

app.use(express.json());

// Import routes
const studentRoutes = require('./routes/student');
const employerRoutes = require('./routes/employer');
const placementRoutes = require('./routes/placement');
const authRoutes = require('./routes/auth');

// Use routes
app.use('/api/students', studentRoutes);
app.use('/api/employers', employerRoutes);
app.use('/api/placements', placementRoutes);
app.use('/api/auth', authRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('Placement Services Management System API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
