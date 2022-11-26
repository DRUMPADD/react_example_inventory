import {createPool} from 'mysql2/promise';

export const pool = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD_USER,
    database: process.env.DATABASE,
    port: process.env.PORT_DB,
});