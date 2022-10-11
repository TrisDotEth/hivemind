export const schema = gql`
  type Action {
    id: Int!
    name: String!
    hivemind: Hivemind!
    hivemindId: Int!
    content: String!
    createdAt: DateTime!
    networkLocation: String!
  }

  type Query {
    actions: [Action!]! @requireAuth
    action(id: Int!): Action @requireAuth
  }

  input CreateActionInput {
    name: String!
    hivemindId: Int!
    content: String!
    networkLocation: String!
  }

  input UpdateActionInput {
    name: String
    hivemindId: Int
    content: String
    networkLocation: String
  }

  type Mutation {
    createAction(input: CreateActionInput!): Action! @requireAuth
    updateAction(id: Int!, input: UpdateActionInput!): Action! @requireAuth
    deleteAction(id: Int!): Action! @requireAuth
  }
`
