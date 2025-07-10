const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const Contact = require('./models/Contact');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ✅ API: save contact
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ message: 'Gửi yêu cầu thành công!' });
  } catch (error) {
    console.error('❌ Error saving contact:', error);
    res.status(500).json({ error: 'Lỗi server khi lưu yêu cầu!' });
  }
});

// ✅ Test API
app.get('/api/ping', (req, res) => {
  res.json({ message: 'Pong from server!' });
});

// ✅ Serve React build
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
