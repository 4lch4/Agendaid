const mongoose = require('mongoose')

class MongoUtil {
  constructor (uri) {
    this.uri = uri
  }
}

module.exports = MongoUtil
