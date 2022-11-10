export const schema = gql`
  type Casts {
    text: String!
    publishedAt: String!
    replyParentUsername: String
    replyParentAddress: String
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

  type AllActivity {
    activity: [SingleActivity]
  }

  type SingleActivity {
    body: Body
    merkleRoot: String
    meta: Meta
    signature: String
    threadMerkleRoot: String
  }

  type Body {
    type: String
    publishedAt: String
    sequence: Int
    address: String
    username: String
    data: Data
  }

  type Data {
    replyParentMerkleRoot: String
    text: String
  }

  type Meta {
    displayName: String
    avatar: String
    isVerifiedAvatar: Boolean
    mentions: Int
    numReplyChildren: Int
    reactions: Reactions
    recasters: [Recasters]
    recasts: Recasts
    replyParentUsername: ReplyParentUsername
    watches: Watches
    threadMerkleRoot: String
  }

  type Reactions {
    count: Int
    type: String
    self: Boolean
  }

  type Recasters {
    count: Int
  }

  type Recasts {
    count: Int
    self: Boolean
  }

  type Watches {
    count: Int
    self: Boolean
  }

  type ReplyParentUsername {
    address: String
    username: String
  }

  type UserDetails {
    address: String
    avatar: Avatar
    displayName: String
    followerCount: Int
    followingCount: Int
    isFollowingViewer: Boolean
    isViewerFollowing: Boolean
    profile: Profile
    username: String
  }

  type Avatar {
    isVerified: Boolean
    url: String
  }

  type Profile {
    bio: Bio
  }

  type Bio {
    text: String
  }

  type Query {
    getCasts(userName: String!): Activity! @skipAuth
    getActivity(userName: String!): AllActivity! @skipAuth
    getUserDetails(userName: String!): UserDetails! @skipAuth
  }
`
