import Database from "better-sqlite3";

const db = new Database("./database.db");

db.prepare(
    `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        location TEXT NOT NULL,
        description TEXT,
        price_per_night INTEGER NOT NULL,
        rating REAL,
        image_url TEXT
    )`
).run()

export default db;