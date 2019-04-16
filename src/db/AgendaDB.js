const mongoose = require('mongoose')

class AgendaDB {
  constructor (uri) {
    mongoose.connect(uri, { useNewUrlParser: true })
    this.connection = mongoose.connection
  }

  addReminder (reminderData) {

  }
}

module.exports = AgendaDB
