'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
//mongoose.set('useCreateIndex', true);
//mongoose.set('useUnifiedTopology: true');

const app = express();
const router = express.Router();



// Conecta ao banco de dados
mongoose.connect(
    'mongodb+srv://bko:88159371@cluster0.liapp.mongodb.net/NodeStore?retryWrites=true&w=majorityNodeStore?retryWrites=true&w=majority', /* { 
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useFindAndModify: false, 
        useUnifiedTopology: true 
    }*/);

// Carrega os models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');


// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false}));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;