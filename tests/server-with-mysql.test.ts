import { afterAll, describe, expect, it } from '@jest/globals'
import request from 'supertest'
import { app, server } from '../src/server-with-local'

afterAll(() => {
  server.close()
})

describe('deck module', () => {
  it('GET /decks is working', async () => {
    const RESPONSE = [
      {
        uuid: '89c09a27-2194-11ef-8aa6-6c240852178d',
        name: 'Japanese vocabulary',
        description: 'My deck with japanese vocabulary',
      },
      {
        uuid: '89c2e38e-2194-11ef-8aa6-6c240852178d',
        name: 'Bash commands',
        description: 'My deck with Linux commands',
      },
      {
        uuid: '89c3bcf8-2194-11ef-8aa6-6c240852178d',
        name: 'Mysterious deck',
        description: 'Now it is not a mysterious deck',
      },
    ]
    const response = await request(app).get('/decks')

    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual(RESPONSE)
  })
})
