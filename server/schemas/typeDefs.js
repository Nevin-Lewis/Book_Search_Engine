const {gql} = require('apollo-server-express');

const typeDefs = gql `
type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
    bookCount: Int
}
type Book {
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String
}
input saveBookInput {
    authors:[String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
}
type Auth {
    token: ID!
    user: User
}
type Query {
    me : User
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!, username: String!): Auth
    saveBook(input: saveBookInput): User
    removeBook(bookId: String!) : User
}
`;

module.exports = typeDefs;
