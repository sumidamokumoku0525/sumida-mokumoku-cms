import * as contentful from 'contentful'
import { config } from '../src/config'

const client = contentful.createClient(config)

const getPosts = async (lim = 100) => {
  const entries = await client.getEntries({
    order: '-sys.createdAt',
    content_type: 'post',
    limit: lim,
  })

  return entries
}

export default getPosts
