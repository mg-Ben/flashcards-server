import { afterAll, beforeEach, describe, expect, it, jest } from '@jest/globals'
import { type RowDataPacket } from 'mysql2'
import MySQLConnection from '@/models/mysql/MySQLConnection'
import { DeckModel } from '@/models/mysql/Deck'
import { decksTest } from '../../fixtures/decksTest'

jest.useFakeTimers()

jest
  .spyOn(MySQLConnection.prototype, 'runQuery')
  .mockImplementation(async () => await Promise.resolve(decksTest as RowDataPacket[]))

describe('mysql deck model', () => {
  const deckModel = new DeckModel()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  afterAll(async () => {
    await deckModel.closeConnection()
  })

  it('should getAll return MySQL database decks', async () => {
    const result = await deckModel.getAll()

    expect(result).toStrictEqual(decksTest)
  })
})
