const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Kết nối MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ✅ Import & gắn route /api/contact
const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);

// ✅ Test route
app.get('/api/ping', (req, res) => {
  res.json({ message: 'Pong from server!' });
});

// ✅ Phục vụ frontend React
const buildPath = path.resolve(__dirname, '../build');
app.use(express.static(buildPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
