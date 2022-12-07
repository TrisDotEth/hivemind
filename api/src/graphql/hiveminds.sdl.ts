// export const schema = gql`
//   type Hivemind {
//     id: Int!
//     name: String!
//     actions: [Action]
//     profiles: [Profile]
//   }

//   type Rule {
//     text: String
//     active: Boolean
//   }

//   type Query {
//     hiveminds: [Hivemind!]! @requireAuth
//     hivemind(id: Int!): Hivemind @requireAuth
//   }

//   input CreateHivemindInput {
//     name: String!
//     profileImageURL: String!
//     aboutInformation: String!
//   }

//   input UpdateHivemindInput {
//     name: String
//     profileImageURL: String
//     aboutInformation: String
//   }

//   type Mutation {
//     createHivemind(input: CreateHivemindInput!): Hivemind! @requireAuth
//     updateHivemind(id: Int!, input: UpdateHivemindInput!): Hivemind!
//       @requireAuth
//     deleteHivemind(id: Int!): Hivemind! @requireAuth
//   }
// `
