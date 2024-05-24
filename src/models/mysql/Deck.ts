import mysql from 'mysql2/promise'
import { type DeckModelType } from '../../types/Deck'

const DEFAULT_CONFIG = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'root',
    database: 'flashcards_db'
}

//const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG

const connection = await mysql.createConnection(DEFAULT_CONFIG)

export class DeckModel implements DeckModelType {
    async get (): Promise<string> {
        return 'OK'
    }
    async getAll (): Promise<mysql.QueryResult>{
        const [result] = await connection.query(
            'SELECT BIN_TO_UUID(uuid) AS uuid, name, description FROM decks;'
        )
        console.log(result)
        return result
    }
}