import { afterAll, describe, expect, it, jest } from '@jest/globals'
import request from 'supertest'
import { app, server } from '@/server-with-local'
import { DeckModel } from '@/models/local/Deck'
import { decksTest } from './fixtures/decksTest'

jest
  .spyOn(DeckModel.prototype, 'getAll')
  .mockImplementation(async () => await Promise.resolve(decksTest))

afterAll(() => {
  server.close()
})

describe('deck module', () => {
  it('should Get /decks return all decks', async () => {
    const response = await request(app).get('/decks')

    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual(decksTest)
  })
})
