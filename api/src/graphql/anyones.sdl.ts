export const schema = gql`
  type Anyone {
    id: Int!
    officialName: String!
    displayName: String!
    shortName: String!
    actions: [Action]!
    profiles: [Profile]!
    createdAt: DateTime!
  }

  type Query {
    anyones: [Anyone!]! @requireAuth
    anyone(id: Int!): Anyone @requireAuth
  }

  input CreateAnyoneInput {
    officialName: String!
    displayName: String!
    shortName: String!
  }

  input UpdateAnyoneInput {
    officialName: String
    displayName: String
    shortName: String
  }

  type Mutation {
    createAnyone(input: CreateAnyoneInput!): Anyone! @requireAuth
    updateAnyone(id: Int!, input: UpdateAnyoneInput!): Anyone! @requireAuth
    deleteAnyone(id: Int!): Anyone! @requireAuth
  }
`
