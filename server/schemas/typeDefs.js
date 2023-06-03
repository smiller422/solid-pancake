const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    fullName: String
    email: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Mutation {
    addUser(input: UserInput): User
    removeUser(userId: ID): User
    login(email: String, password: String): Auth
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }`;

  module.exports = typeDefs;