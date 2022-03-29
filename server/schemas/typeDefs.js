const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book],
} 
type Book {
    _id: ID

}
type Authors {
    authors:[String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

type Auth {
    token: ID!
    user: User
}

input SavedBookInput {
    authors:[String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: SavedBookInput): User
    removeBook(bookId: String): User
}
`;

module.exports = typeDefs;