import cors, { type CorsRequest } from 'cors'

const ACCEPTED_ORIGINS = ['http://localhost:8080', 'http://localhost:1234', 'http://localhost:5500']

type CorsType = (
  req: CorsRequest,
  res: { statusCode?: number | undefined, setHeader: (key: string, value: string) => any, end: () => any },
  next: (err?: any) => any,
) => void

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}): CorsType =>
  cors({
    origin: (origin, callback) => {
      if (typeof origin === 'string' && acceptedOrigins.includes(origin)) {
        return callback(null, true)
      }

      // TODO: Delete
      if (origin === undefined) {
        return callback(null, true)
      }

      return callback(new Error('Not allowed by CORS'))
    }
  })
