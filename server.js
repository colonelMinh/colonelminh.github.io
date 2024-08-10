const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

// Kết nối tới MongoDB
mongoose.connect('mongodb://localhost:27017/userDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Kiểm tra kết nối
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.log('Error connecting to MongoDB:', err);
});

// Định nghĩa schema và model cho người dùng
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const corsOptions = {
  origin: 'http://127.0.0.1:5500', // Thay thế bằng địa chỉ của bạn
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
const User = mongoose.model('User', userSchema);

// Middleware để parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Xử lý yêu cầu đăng ký
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  console.log('Received signup request:', username, password);

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).send('Tên đăng nhập đã tồn tại, vui lòng chọn tên khác');
  }

  const user = new User({ username, password });
  try {
    await user.save();
    console.log('User registered successfully');
    res.send('User registered successfully');
  } catch (error) {
    console.error('Registration failed:', error);
    res.status(500).send('Registration failed');
  }
});


// Xử lý yêu cầu đăng nhập
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });
  if (user) {
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
