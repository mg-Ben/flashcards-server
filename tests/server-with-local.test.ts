import { afterAll, describe, expect, it } from '@jest/globals'
import request from 'supertest'
import { app, server } from '../src/server-with-local'

afterAll(() => {
  server.close()
})

describe('deck module', () => {
  it('GET is working', async () => {
    const RESPONSE = {
      message: 'OK'
    }
    const response = await request(app).get('/decks')

    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual(RESPONSE)
  })
})
