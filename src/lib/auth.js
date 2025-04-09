const db = require('./db');

async function registerUser(email, password) {
    const pool = await db;
    const result = await pool.request()
        .input('email', email)
        .input('password', password)
        .query('INSERT INTO Users (Email, Password) VALUES (@email, @password)');

    return result.rowsAffected[0] > 0;
}

async function loginUser(email, password) {
    const pool = await db;
    const result = await pool.request()
        .input('email', email)
        .input('password', password)
        .query('SELECT * FROM Users WHERE Email = @email AND Password = @password');

    return result.recordset[0];
}

module.exports = { registerUser, loginUser };