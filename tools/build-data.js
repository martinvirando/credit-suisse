const _ = require('underscore');
const moment = require('moment');
const fsPath = require('fs-path');

const countries = ['Germany', 'United Kingdom', 'France', 'Austria', 'Australia', 'Italy'];
const manufacturers = ['Denzil Jeans', 'Wrangled Jeans', 'The Hipster Jeans Company'];
const sexes = ['Male', 'Female'];
const style = ['Relaxed', 'Skinny', 'Boot Cut'];
const colors = ['Dark Blue', 'Light Blue', 'Red', 'Yellow'];

const sizes =  {
  Female: [12, 16],
  Male: [32, 28, 30]
};

let orders = [];
let startDate = moment().subtract(1, 'year').startOf('day');

Array.prototype.randomize = function() {
  return this[_.random(0, this.length - 1)];
};

_.times(1000, i => {

  let obj = {
    deliveryCountry: countries.randomize(),
    manufacturer: manufacturers.randomize(),
    gender: sexes.randomize(),
    style: style.randomize(),
    color: colors.randomize(),
    count: _.random(0, 100),
    orderDate: startDate.format('x')
  };

  obj.size = sizes[obj.gender].randomize();

  if (i % 3 === 0) {
    startDate = moment(startDate).add(1, 'day');
    obj.orderDate = startDate.format('x');
  }

  orders.push(obj);

});

fsPath.writeFile('./stub/orders.json', JSON.stringify(orders), (err) => {
  if (err) console.error(err);
  console.log('Stub Order data has been created!');
});

// console.log("orders", orders);