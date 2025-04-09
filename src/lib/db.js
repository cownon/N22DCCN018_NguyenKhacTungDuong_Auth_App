const sql = require('mssql');

const config = {
    user: 'sa',
    password: 'example_123',
    server: 'localhost',
    database: 'clockeedb',
    port: 1433,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

const pool = new sql.ConnectionPool(config).connect();

module.exports = pool;