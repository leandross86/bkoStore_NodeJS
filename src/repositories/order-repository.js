'use strict';
const mongoose = require('mongoose');
const Order = mongoose.model('Order');



exports.get = async (data) => {
    var res = await order.find({});
    return res;
}
exports.create = async (data) => {
    let order = new Order(data);
    await order.save();
}