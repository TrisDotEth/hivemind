export const schema = gql`
  type Action {
    id: Int!
    anyone: Anyone!
    anyoneDisplayName: String!
    anyoneId: Int!
    content: String!
    contentType: String!
    createdAt: DateTime!
    networkLocation: String!
    walletAddress: String!
    signedTransaction: String!
    succeeded: Boolean!
  }

  type Query {
    actions: [Action!]! @requireAuth
    action(id: Int!): Action @requireAuth
  }

  input CreateActionInput {
    anyoneDisplayName: String!
    anyoneId: Int!
    content: String!
    contentType: String!
    networkLocation: String!
    walletAddress: String!
    signedTransaction: String!
    succeeded: Boolean!
  }

  input UpdateActionInput {
    anyoneDisplayName: String
    anyoneId: Int
    content: String
    contentType: String
    networkLocation: String
    walletAddress: String
    signedTransaction: String
    succeeded: Boolean
  }

  type Mutation {
    createAction(input: CreateActionInput!): Action! @requireAuth
    updateAction(id: Int!, input: UpdateActionInput!): Action! @requireAuth
    deleteAction(id: Int!): Action! @requireAuth
  }
`
