export const schema = gql`
  type Hivemind {
    id: Int!
    name: String!
    profileImageURL: String!
    aboutInformation: String!
    farcasterName: String!
    actions: [Action]!
    rules: [Rule]
    moderator: String
    contractAddress: String
  }

  type Rule {
    text: String
    active: Boolean
  }

  type Query {
    hiveminds: [Hivemind!]! @skipAuth
    hivemind(id: Int!): Hivemind @skipAuth
  }

  input CreateHivemindInput {
    name: String!
    profileImageURL: String!
    aboutInformation: String!
  }

  input UpdateHivemindInput {
    name: String
    profileImageURL: String
    aboutInformation: String
  }

  type Mutation {
    createHivemind(input: CreateHivemindInput!): Hivemind! @requireAuth
    updateHivemind(id: Int!, input: UpdateHivemindInput!): Hivemind!
      @requireAuth
    deleteHivemind(id: Int!): Hivemind! @requireAuth
  }
`
