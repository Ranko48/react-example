const knex = require('knex')
const knexfile = require('./knexfile')
const { Model } = require('objection')

const setup = () => {
    let db
    if (process.env.ENV === 'production')
        db = knex(knexfile.production)
    else
        db = knex(knexfile.development)


    Model.knex(db)
}

module.exports = setup