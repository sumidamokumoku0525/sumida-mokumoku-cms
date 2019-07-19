import * as contentful from 'contentful'
import { config } from './config'

const client = contentful.createClient(config)

<<<<<<< HEAD:src/getItems.js
export const getPosts = async (lim = 100) => {
=======
const getPosts = async (model, lim = 100) => {
>>>>>>> bcdbab00540ea4ed94b796fee14598e91dc345e6:src/getPosts.js
  const entries = await client.getEntries({
    order: '-sys.createdAt',
    content_type: model,
    limit: lim
  })

  return entries
}
