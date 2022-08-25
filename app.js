const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 4000;

// connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  () => console.log(`MongoDB is connected with ${process.env.DB_CONNECT}`)
);

// Import routes
const userRoutes = require("./routes/userRoute");

// For save req.body will find in this code
app.use(express.urlencoded({ extended: false }));

// Static or Public files as a Middleware
app.use('/', express.static('public'));
app.use('/edit-user', express.static('public'));

// Set templete engine
app.set('view engine', 'ejs');

// Route Middlewares
app.use("/", userRoutes);

app.listen(PORT, () => console.log(`Server is runing with http://localhost:${PORT}`));