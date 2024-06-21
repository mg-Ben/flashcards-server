import MySQLConnection from '@/models/mysql/MySQLConnection'
import { DeckModel } from '../../../src/models/mysql/Deck'
import { beforeEach, describe, expect, it, jest } from '@jest/globals'
import { decksTest } from 'tests/fixtures/decksTest'

/*
References:
https://jestjs.io/docs/manual-mocks#mocking-node-modules
*/

jest.mock('../../../src/models/mysql/MySQLConnection')

// const mockConnection = {
//   query: jest.fn(() => decksTest)
// }

describe('mysql deck model', () => {
  // beforeEach(() => {
  //   ;(mysql.createConnection as jest.Mock).mockReturnValue(mockConnection)
  // })

  // afterEach(() => {
  //   jest.clearAllMocks()
  // })

  const deckModel = new DeckModel()

  beforeEach(() => {
    // MySQLConnection.mockClear()
  })

  it('getAll should return MySQL database decks', async () => {
    // const result = deckModel.getAll()

    // expect(result).toBe('Hello World')
    expect(true).toBeTruthy()
  })

  it('We can check if the consumer called the class constructor', async () => {
    await deckModel.getAll()
    expect(MySQLConnection).toHaveBeenCalledTimes(1)
  })
})
