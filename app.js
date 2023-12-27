const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const errorController = require('./controllers/error');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');
const successRoutes = require('./routes/success');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(contactRoutes);
app.use(successRoutes);
app.use(shopRoutes);


app.use(errorController.get404);

app.listen(3000);