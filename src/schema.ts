import { makeSchema } from 'nexus'
import path from 'path'
import * as graphQLTypes from './graphql'

export const schema = makeSchema({
  types: graphQLTypes,
  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/generated-types.d.ts')
  },
  nonNullDefaults: {
    input: false,
    output: false
  }
})
