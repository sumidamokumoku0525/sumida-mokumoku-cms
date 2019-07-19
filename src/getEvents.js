import * as contentful from 'contentful'
import { config } from './config'

const client = contentful.createClient(config)

const getEvents = async (lim = 100) => {
  const entries = await client.getEntries({
    order: '-sys.createdAt',
    content_type: 'event',
    limit: lim,
  })

  return entries
}

export default getEvents
