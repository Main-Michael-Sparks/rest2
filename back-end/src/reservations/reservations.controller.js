/**
 * List handler for reservation resources
 */
const knex = require("../db/connection");
async function list(req, res) {
  const data = await knex("reservations").select("*");
  res.json({
    data
  });
}

module.exports = {
  list,
};
