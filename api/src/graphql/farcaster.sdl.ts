export const schema = gql`
  type Casts {
    text: String!
    publishedAt: String!
    replyParentUsername: String!
    replyParentAddress: String!
    sequence: Int!
  }

  type Activity {
    avatar: String!
    displayName: String!
    username: String!
    followerCount: String!
    followingCount: String!
    bioText: String!
    casts: [Casts!]!
  }

  type Query {
    getCasts(userName: String!): Activity! @skipAuth
  }
`
