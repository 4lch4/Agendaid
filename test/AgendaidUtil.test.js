const util = new (require('../').AgendaidUtil)()

test('getCollectionName() should get a valid collection name based on the (optional) parameter', () => {
  const utcMs = 1555953586442
  const currDate = new Date()
  const futrDate = new Date(utcMs)

  expect(util.getCollectionName()).toBe(`${currDate.getFullYear()}.${getWeekNumber(currDate)}`)
  expect(util.getCollectionName(utcMs)).toBe(`${futrDate.getFullYear()}.${getWeekNumber(futrDate)}`)
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
