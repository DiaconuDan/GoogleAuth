const express = require('express');
const mongoose = require('mongoose');
const keys = require('./server/config/keys');
require('./server/models/User');
require('./server/services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
const app = express();


require('./server/routes/authRoutes')(app);

const PORT = process.env.PORT || 5000 ;
app.listen(PORT);