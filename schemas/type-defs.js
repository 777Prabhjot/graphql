const typeDefs = `#graphql

  type Users {
    id: ID!
    name: String!
    age: Int!
    country: CountryEnum!
    favoriteMovie: Movies
  }

  type Country {
    id: ID!
    name: String
    code: String!
  }

  type Movies {
    id: ID!
    name: String!
  }

  input UserInputs {
    name: String!
    age: Int!
    country: CountryEnum!
  }

  input UpdateUserInputs {
    id: ID!
    name: String!
    age: Int!
    country: CountryEnum!
  }


  type Query {
    users: [Users!]!
    user(name: String!): Users!
    movies: [Movies!]!
    country(code: String!): Country!
  }

  type Mutation {
    createUser(inputs: UserInputs!): Users
    updateUser(inputs: UpdateUserInputs!): Users
    deleteUser(id: ID!): Users
  }

  enum CountryEnum {
    india
    japan
    america
    germany
  }
`;

export default typeDefs;
