const path = require('path')

const dbPath = path.resolve(__dirname, 'db/database.sqlite')

const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
})

// Just for debugging purposes:
// Log all data in "locations" table
knex.select('*').from('locations')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))

module.exports = knex
