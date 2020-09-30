if (process.env.NODE_ENV == 'production') {
  //set production keys
  module.exports = require('/prod');
} else {
  //set dev keys
  module.exports = require('./dev');
}
