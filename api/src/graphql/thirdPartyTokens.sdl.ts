export const schema = gql`
  type ThirdPartyToken {
    id: Int!
    profilename: String!
    thirdparty: String!
    refreshtoken: String!
    bearertoken: String!
    createdAt: DateTime!
  }

  type Query {
    thirdPartyTokens: [ThirdPartyToken!]! @requireAuth
    thirdPartyToken(id: Int!): ThirdPartyToken @requireAuth
  }

  input CreateThirdPartyTokenInput {
    profilename: String!
    thirdparty: String!
    refreshtoken: String!
    bearertoken: String!
  }

  input UpdateThirdPartyTokenInput {
    profilename: String
    thirdparty: String
    refreshtoken: String
    bearertoken: String
  }

  type Mutation {
    createThirdPartyToken(input: CreateThirdPartyTokenInput!): ThirdPartyToken!
      @requireAuth
    updateThirdPartyToken(
      id: Int!
      input: UpdateThirdPartyTokenInput!
    ): ThirdPartyToken! @requireAuth
    deleteThirdPartyToken(id: Int!): ThirdPartyToken! @requireAuth
  }
`
