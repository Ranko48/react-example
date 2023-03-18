const { Model } = require("objection");
const knex = require('../knexfile')
Model.knex(knex)
class Brand extends Model {
    static get tableName() {
        return "brand";
    }
    static get idColumn() {
        return 'name';
    }
}

module.exports = Brand