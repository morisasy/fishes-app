const { Client } = require("pg");
const connectionString = {
  user: 'postgres',
  host: 'localhost',
  database: 'fishes-app',
  password: 'medi49',
  port: 5432,
};
const client = new Client(connectionString);

//connectionString: "postgresql://localhost/fishes-app"

client.connect();

module.exports = client;
