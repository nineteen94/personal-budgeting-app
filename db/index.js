const {Pool} = require('pg');

const pool = new Pool ({
    user: 'vishal',
    host: 'localhost',
    database: 'personal_budget',
    password: 'vishal',
    port: 5432,
});

module.exports = {
    async query (text, params) {
        const res = await pool.query(text, params);
        return res;
    }
}