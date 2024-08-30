const Pool = require("pg").Pool;

const pool = new Pool({ 
    user: "postgres",
    password: "kthl8822",
    port: 5432,
    database: "perntodo"
})

module.export = pool;