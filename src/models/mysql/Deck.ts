import { type DeckModelType, type Deck } from '@/types/Deck'
import MySQLConnection from './MySQLConnection'

export class DeckModel implements DeckModelType {
  readonly #mysqlConnection: MySQLConnection

  constructor () {
    this.#mysqlConnection = new MySQLConnection()
  }

  // TODO get deck function
  async get (): Promise<string> {
    return 'OK'
  }

  async getAll (): Promise<Deck[]> {
    const query = 'SELECT BIN_TO_UUID(uuid) AS uuid, name, description FROM decks;'
    const queryResult = await this.#mysqlConnection.runQuery(query)

    const result: Deck[] = []
    queryResult.forEach((row) => {
      const deckObject: Deck = {
        uuid: row.uuid,
        name: row.name,
        description: row.description
      }

      // TODO validate data
      // validateDataDeck(deckObject)

      result.push(deckObject)
    })

    return result
  }

  async closeConnection (): Promise<void> {
    await this.#mysqlConnection.closeConnection()
  }
}
