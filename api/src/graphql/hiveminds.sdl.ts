export const schema = gql`
  type Hivemind {
    id: Int!
    name: String!
    profileImageURL: String
    actions: [Action]!
  }

  type Query {
    hiveminds: [Hivemind!]! @requireAuth
    hivemind(id: Int!): Hivemind @requireAuth
  }

  input CreateHivemindInput {
    name: String!
    profileImageURL: String
  }

  input UpdateHivemindInput {
    name: String
    profileImageURL: String
  }

  type Mutation {
    createHivemind(input: CreateHivemindInput!): Hivemind! @requireAuth
    updateHivemind(id: Int!, input: UpdateHivemindInput!): Hivemind!
      @requireAuth
    deleteHivemind(id: Int!): Hivemind! @requireAuth
  }
`
