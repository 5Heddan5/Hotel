import Database from 'better-sqlite3';

const db = new Database('database.db');

const query = `
CREATE TABLE IF NOT EXISTS hotels (
    hotel_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    location TEXT NOT NULL,
    description TEXT,
    price_per_night INTEGER NOT NULL,
    rating REAL
);
`;

db.exec(query);
export default db;