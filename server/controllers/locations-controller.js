const database = require('./../db')

exports.locationsAll = async (req, res) => {
  database
    .select('*')
    .from('locations')
    .then(queryData => {
      res.json({ locations: queryData })
    })
    .catch(err => {
      res.json({ message: `There was an error retrieving locations: ${err}` })
    })
}

exports.queryLocation = async (req, res) => {
    database
    .select('*')
    .from('locations')
    .where('name', 'like', req.query.q+'%')
    .then(queryData => {
      res.json({ locations: queryData })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving locations: ${err}` })
    })
}