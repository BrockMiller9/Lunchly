// /** Database for lunchly */

// const pg = require("pg");

// const db = new pg.Client("postgresql:///lunchly");

// process.env.PGPASSWORD = process.env.DB_PASSWORD;

// db.connect();

// module.exports = db;

const { Client } = require("pg");

let DB_URI;

process.env.PGPASSWORD = process.env.DB_PASSWORD;

if (process.env.NODE_ENV === "test") {
  DB_URI = "postgresql:///lunchly_test";
} else {
  DB_URI = "postgresql:///lunchly";
}

let db = new Client({
  connectionString: DB_URI,
  ssl: {
    rejectUnauthorized: false,
  },
});

db.connect();

module.exports = db;
