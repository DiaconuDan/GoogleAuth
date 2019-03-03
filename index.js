const express = require('express');
require('./server/services/passport');

const app = express();

require('./server/routes/authRoutes')(app);

const PORT = process.env.PORT || 5000 ;
app.listen(PORT);