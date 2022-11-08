export const schema = gql`
  type Profile {
    id: Int!
    profileId: Int!
    hivemind: Hivemind!
    profileType: String!
    importedData: JSON
  }

  type Query {
    profiles: [Profile!]! @requireAuth
    hivemindProfiles(profileId: Int!): [Profile!]! @requireAuth
    profile(id: Int!): Profile @requireAuth
  }

  input CreateProfileInput {
    profileId: Int!
    profileType: String!
    importedData: JSON!
  }

  input UpdateProfileInput {
    profileId: Int
    profileType: String
    importedData: JSON
  }

  type Mutation {
    createProfile(input: CreateProfileInput!): Profile! @requireAuth
    updateProfile(id: Int!, input: UpdateProfileInput!): Profile! @requireAuth
    deleteProfile(id: Int!): Profile! @requireAuth
  }
`
