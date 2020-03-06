import { ApolloServer } from 'apollo-server'

import { schema } from './schema'

export const apolloConfig = {
  schema,
  playground: true,
  introspection: true,
  context: ({ req }) => {
    return {
      headers: req.headers
    }
  }
}

const server = new ApolloServer(apolloConfig)
const port = process.env.PORT || 4000
server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
