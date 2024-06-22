import mysql, { type RowDataPacket } from 'mysql2/promise'

interface ConnectionParams {
  user: string
  password: string
  host: string
  port: string
  databaseName: string
}

export default class MySQLConnection {
  readonly #connection: Promise<mysql.Connection> | undefined
  readonly #uri: string

  constructor () {
    this.#uri = this.#getConnectionUriFromParams()
    this.#connection = this.getConnection()
  }

  #getConnectionUriFromParams (): string {
    const { user, password, host, port, databaseName } = this.#getConnectionParams()
    return `mysql://${user}:${password}@${host}:${port}/${databaseName}`
  }

  #getConnectionParams (): ConnectionParams {
    const user = process.env.MYSQL_USER ?? 'root'
    const password = process.env.MYSQL_PASSWORD ?? 'root'
    const host = process.env.MYSQL_HOST ?? 'localhost'
    const port = process.env.MYSQL_PORT ?? '3306'
    const databaseName = process.env.MYSQL_DATABASE_NAME ?? 'flashcards_db'

    return {
      user,
      password,
      host,
      port,
      databaseName
    }
  }

  async getConnection (): Promise<mysql.Connection> {
    if (this.#connection !== undefined) {
      return await this.#connection
    }

    return await mysql.createConnection(this.#uri)
  }

  async runQuery (
    query: string
  ): Promise<RowDataPacket[]> {
    const connection = await this.getConnection()
    const [queryResult] = await connection.query<RowDataPacket[]>(query)
    return queryResult
  }

  async closeConnection (): Promise<void> {
    const connection = await this.getConnection()
    await connection.end()
  }
}
