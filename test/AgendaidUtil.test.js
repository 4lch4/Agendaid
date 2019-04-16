const util = new (require('../').AgendaidUtil)()

test('getCollectionName() should get a valid collection name based on the (optional) parameter', () => {
  const utcMs = 1555953586442
  const currDate = new Date()
  const futrDate = new Date(utcMs)

  expect(util.getCollectionName()).toBe(`${currDate.getFullYear()}.${getWeekNumber(currDate)}`)
  expect(util.getCollectionName(utcMs)).toBe(`${futrDate.getFullYear()}.${getWeekNumber(futrDate)}`)
})

test('getTriggerTime() should get the correct UTC ms for the given time offset', () => {
  /** The amount of milliseconds equal to 3 days, 2 hours, and 15 minutes */
  const MS_OFFSET = 267300000
  const triggerTime = util.getTriggerTime({ days: 3, hours: 2, minutes: 15 })
  const testTime = new Date().getTime() + MS_OFFSET
  expect(triggerTime).toBe(testTime)
})

test('parseArgs() should parse the given String and return the relevant data', () => {
  const testStr = 'Go to the store for milk & eggs in 3 days 2 hours and 15 minutes'
  const testArr = testStr.split(' ')

  expect(util.parseArgs(testArr)).toEqual({
    reminderMsg: 'Go to the store for milk & eggs',
    days: 3,
    hours: 2,
    minutes: 15
  })
})

test('parseUserInput() should return an object of clean data for a reminder', () => {
  const testData = {}
})

test('getTimeVal() should get the amount of time from the given parameters', () => {

})

test('getReminderMsg() should get the content of the reminder from the message sent by the user', () => {
  const testStr = 'Go to the store for milk & eggs in 3 days 2 hours and 15 minutes'
  const testArr = testStr.split(' ')

  expect(util.getReminderMsg(testArr)).toBe('Go to the store for milk & eggs')
})

test('getTimeArgs() should get the portion of the user provided args that only contains the time data for the reminder', () => {

})

/**
 * Retrieves the ISO week number of the provided date using native Javascript
 * functions.
 *
 * @param {Date} d The date you wish to retrieve the week number for.
 */
const getWeekNumber = d => {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
  const dayNum = d.getUTCDay() || 7

  d.setUTCDate(d.getUTCDate() + 4 - dayNum)

  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))

  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7)
}
