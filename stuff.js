const fs = require("fs");
var mysql = require("mysql");
const { exit } = require("process");

conn = mysql.createConnection({
  database: "knollludger",
  user: "ovwnijx4v6km",
  host: "pds4tmjq85sd.us-east-1.psdb.cloud",
  password: "pscale_pw_MCFe0mFukNhTpK78bA_ZxsSEbRKYOoVp8UIIe9veGl8",
  ssl: {
    rejectUnauthorized: true,
  },
});

conn.connect((err) => {
  if (err) throw err;

  let sql = `CREATE TABLE artists (
    id int(100),
    name varchar(200),
    PRIMARY KEY (id)
    )`;
  conn.query(sql, (err, res) => {
    console.log(err);
    console.log("hi");
  });
});

function getrand(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let nouns = JSON.parse(fs.readFileSync("./nouns.json")).nouns;
let adjectives = JSON.parse(fs.readFileSync("./adjectives.json"));

console.log(getrand(nouns), getrand(adjectives));

artists = [];
for (let i = 0; i < 1000; i++) {
  artists.push({
    id: i,
    name: getrand(adjectives) + " " + getrand(nouns),
  });
}
// fs.writeFileSync("./artists.json", JSON.stringify(artists, null, 2));
console.log(artists);
