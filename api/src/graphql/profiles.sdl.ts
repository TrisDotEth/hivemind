export const schema = gql`
  type Profile {
    id: Int!
    anyoneId: Int!
    anyone: Anyone!
    profileType: String!
    importedData: JSON!
    createdAt: DateTime!
    farcasterUsername: String
  }

  type Query {
    profiles: [Profile!]! @requireAuth
    profile(id: Int!): Profile @requireAuth
  }

  input CreateProfileInput {
    anyoneId: Int!
    profileType: String!
    importedData: JSON!
  }

  input UpdateProfileInput {
    anyoneId: Int
    profileType: String
    importedData: JSON
  }

  type Mutation {
    createProfile(input: CreateProfileInput!): Profile! @requireAuth
    updateProfile(id: Int!, input: UpdateProfileInput!): Profile! @requireAuth
    deleteProfile(id: Int!): Profile! @requireAuth
  }
`
