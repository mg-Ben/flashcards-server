import mysql, { RowDataPacket } from 'mysql2/promise'
import { type DeckModelType, Deck } from '../../types/Deck'
import { validateDataDeck } from '../../schemas/DeckSchema'
//import { validateDataDeck } from '../../schemas/DeckSchema'

const DEFAULT_CONFIG = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'root',
  database: 'flashcards_db',
}

const connectionString =
  process.env.DATABASE_URL ??
  'mysql://' +
    DEFAULT_CONFIG['user'] +
    ':' +
    DEFAULT_CONFIG['password'] +
    '@' +
    DEFAULT_CONFIG['host'] +
    ':' +
    DEFAULT_CONFIG['port'] +
    '/' +
    DEFAULT_CONFIG['database']
const connection = await mysql.createConnection(connectionString)

export class DeckModel implements DeckModelType {
  async get(): Promise<string> {
    return 'OK'
  }

  async getAll(): Promise<Deck[]> {
    const [query_result] = await connection.query<RowDataPacket[]>(
      'SELECT BIN_TO_UUID(uuid) AS uuid, name, description FROM decks;',
    )
    // Convert query result into Deck[] type
    const result: Deck[] = []
    query_result.forEach((row) => {
      //Convert each row into Deck type
      const deckObject: Deck = {
        uuid: row['uuid'],
        name: row['name'],
        description: row['description'],
      }
      // Validate data:
      // validateDataDeck(deckObject)
      result.push(deckObject)
    })
    return result
  }
}
