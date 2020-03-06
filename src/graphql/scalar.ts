import { asNexusMethod } from 'nexus'
import { GraphQLDateTime } from 'graphql-iso-date'
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json'

export const DateScalar = asNexusMethod(GraphQLDateTime, 'date')
export const JSONObjectScalar = asNexusMethod(GraphQLJSONObject, 'jsonObject')
export const JSONScalar = asNexusMethod(GraphQLJSON, 'json')
