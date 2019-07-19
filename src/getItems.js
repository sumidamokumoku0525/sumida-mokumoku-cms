import * as contentful from 'contentful'
import { config } from './config'

const client = contentful.createClient(config)

export const getPosts = async (lim = 100) => {
  const entries = await client.getEntries({
    order: '-sys.createdAt',
    content_type: 'post',
    limit: lim,
  })

  return entries
}
