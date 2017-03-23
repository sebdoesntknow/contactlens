"use strict";

const constants = require('./lib/constants');

function queryDB(client, queryString) {
  return new Promise((resolve, reject) => {
    if (!client.isClosed) {
      client.query(queryString, (err, resp) => {
        if (err) {
          reject("Error occurred while querying the database:", err);
        }

        resolve(resp);
      });
    }
  });
}

function connectToDB() {
  const pg  = require('pg'); // postgress client

  const config = {
    user: constants.dbuser,
    password: constants.dbpassword,
    database: constants.database,
    host: constants.dbhost,
    port: constants.dbport,
    idleTimeoutMillis: constants.dbidleTimeoutMillis
  };

  return pg.Client(config);
}

module.exports.getData = function(event, context, callback) {
    /*
      - Receive clens id through params.
      - Validate input data
      - Open connection with Postgres db
      - Generate query with custom parameters
      - Send query to PG client
      - Receive data if successful, show error if not
    */

    callback(null, "Success!");
};