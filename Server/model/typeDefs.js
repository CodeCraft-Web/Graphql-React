import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    getUsers: [User!]!
    getUserById(id: ID!): User!
  }

  input createUserInput {
    name: String!
    age: Int!
    isMarried: Boolean!
  }

  type Mutation {
    createUser(input: createUserInput): User
  }

  type User {
    id: ID!
    name: String!
    age: Int!
    isMarried: Boolean!
  }
`
