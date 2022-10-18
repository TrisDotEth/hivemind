export const schema = gql`
  type Casts {
    text: String!
    publishedAt: String!
  }

  type Activity {
    avatar: String!
    displayName: String!
    username: String!
    type: String!
    casts: [Casts!]!
  }

  type Query {
    getCasts(userName: String!): Activity! @skipAuth
  }
`
