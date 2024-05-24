import mysql from 'mysql2/promise'

export interface DeckModelType {
  get: () => Promise<string>
  getAll: () => Promise<mysql.QueryResult>
}
