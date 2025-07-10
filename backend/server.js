const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB error:", err));

// API thử nghiệm
app.get('/api/ping', (req, res) => {
  res.json({ message: 'Pong from server!' });
});

// 👉 Phục vụ React build
const buildPath = path.resolve(__dirname, '../build');
app.use(express.static(buildPath));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(buildPath, 'index.html'));
});

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
