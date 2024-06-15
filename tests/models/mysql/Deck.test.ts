import mysql from 'mysql2/promise'
import { DeckModel } from '../../../src/models/mysql/Deck'
import { afterEach, beforeEach, describe, expect, it, jest } from '@jest/globals'

jest.mock('mysql2/promise')

const mockConnection = {
  query: jest.fn(() =>
    [
      {
        uuid: '89c09a27-2194-11ef-8aa6-6c240852178d',
        name: 'Japanese vocabulary',
        description: 'My deck with japanese vocabulary'
      },
      {
        uuid: '89c2e38e-2194-11ef-8aa6-6c240852178d',
        name: 'Bash commands',
        description: 'My deck with Linux commands'
      },
      {
        uuid: '89c3bcf8-2194-11ef-8aa6-6c240852178d',
        name: 'Mysterious deck',
        description: 'Now it is not a mysterious deck'
      }
    ]
  )
}

describe('mysql deck model', () => {
  beforeEach(() => {
    (mysql.createConnection as jest.Mock).mockReturnValue(mockConnection)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('getAll should return a JSON decks array', async () => {
    const deckModel = new DeckModel()
    const result = deckModel.getAll()

    expect(result).toBe('Hello World')
  })
})
