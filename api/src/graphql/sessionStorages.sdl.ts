export const schema = gql`
  type SessionStorage {
    id: String!
    twitterState: String!
    twitterCodeVerifier: String!
    twitterURLRedirect: String!
  }

  # TODO PUT REQUIRE AUTH BAKC ON
  type Query {
    sessionStorages: [SessionStorage!]! @skipAuth
    sessionStorage(id: String!): SessionStorage @requireAuth
  }

  input CreateSessionStorageInput {
    twitterState: String!
    twitterCodeVerifier: String!
    twitterURLRedirect: String!
  }

  input UpdateSessionStorageInput {
    twitterState: String
    twitterCodeVerifier: String
    twitterURLRedirect: String
  }

  type Mutation {
    createSessionStorage(input: CreateSessionStorageInput!): SessionStorage!
      @skipAuth
    updateSessionStorage(
      id: String!
      input: UpdateSessionStorageInput!
    ): SessionStorage! @requireAuth
    deleteSessionStorage(id: String!): SessionStorage! @requireAuth
  }
`
