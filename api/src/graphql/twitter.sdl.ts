// Copied from actions.sdl.ts
export const schema = gql`
  type twitterAccountDetails {
    id: Int!
    name: String!
    hivemind: Hivemind!
    hivemindId: Int!
    content: String!
    createdAt: DateTime!
    networkLocation: String!
    walletAddress: String!
    signedTransaction: String!
  }

  type Query {
    twitterDetails: twitterAccountDetails! @requireAuth
  }

  input twitterAccountDetailsInput {
    name: String!
    hivemindId: Int!
    content: String!
    networkLocation: String!
    walletAddress: String!
    signedTransaction: String!
  }

  type TweetDeets {
    twitterAccessToken: String
    twitterRefreshToken: String
    twitterURL: String
    client: JSON!
  }

  type tweetAuthInit {
    twitterURLRedirect: String
    twitterCodeVerifier: String
    twitterState: String
    twitterURL: String
  }

  input TwitterSuccessAuth {
    id: Int
    bearertoken: String
    state: String
  }

  type Mutation {
    connectTwitterUser: tweetAuthInit! @skipAuth
    authTwitterAccountSuccess(id: Int!, input: TwitterSuccessAuth!): TweetDeets
      @skipAuth
  }
`
