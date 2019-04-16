const Agenda = require('agenda')
const day = require('dayjs')
day.extend(require('dayjs/plugin/weekOfYear'))

class Agendaid {
  constructor (address) {
    this.collectionName = `${day().format('YYYY')}.${day().week()}`
    this.agenda = new Agenda({
      db: {
        address: address,
        collection: this.collectionName,
        options: { useNewUrlParser: true }
      }
    })
  }

  /**
   * Initializes Agenda and the jobs that are ran every 30 (default) seconds.
   */
  initJobs () {
    this.agenda.define('Send reminders', (job, done) => {
      const dataIn = job.attrs.data
      console.log(`data received...`)
      console.log(dataIn)
      done()
    })

    return this
  }

  /**
   * Starts Agenda and the various jobs it manages. If an interval is provided,
   * the jobs are "executed" using that interval, otherwise it is defaulted to
   * every 30 seconds.
   */
  start (interval = '30 seconds') {
    this.agenda.start()
    this.agenda.on('ready', () => {
      this.agenda.every(interval, 'Send reminders')
    })
  }

  scheduleReminder () { }
}

module.exports = Agendaid
