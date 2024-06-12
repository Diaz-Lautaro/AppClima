const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const URL = "mongodb+srv://diazlautaro917:Mx3DIXCP59Cw6Mup@cluster0.v0vnstr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.use(cors());
app.use(bodyParser.json());



mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const historialBusquedaRouter = require('./routes/HistorialBusqueda.js');
app.use('/api/historialBusqueda', historialBusquedaRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});