export const schema = gql`
  # type Casts {
  #   text: String!
  #   publishedAt: String!
  #   replyParentUsername: String
  #   replyParentAddress: String
  #   sequence: Int!
  # }

  # type Activity {
  #   avatar: String!
  #   displayName: String!
  #   username: String!
  #   followerCount: String!
  #   followingCount: String!
  #   bioText: String!
  #   casts: [Casts!]!
  # }

  type AllActivity {
    activity: [Activity]
  }

  # type SingleActivity {
  #   body: Body
  #   merkleRoot: String
  #   meta: Meta
  #   signature: String
  #   threadMerkleRoot: String
  # }

  # type Body {
  #   type: String
  #   publishedAt: String
  #   sequence: Int
  #   address: String
  #   username: String
  #   data: Data
  # }

  # type Data {
  #   replyParentMerkleRoot: String
  #   text: String
  # }

  # type Meta {
  #   displayName: String
  #   avatar: String
  #   isVerifiedAvatar: Boolean
  #   mentions: Int
  #   numReplyChildren: Int
  #   reactions: Reactions
  #   recasters: [Recasters]
  #   recasts: Recasts
  #   replyParentUsername: ReplyParentUsername
  #   watches: Watches
  #   threadMerkleRoot: String
  # }

  # type Reactions {
  #   count: Int
  #   type: String
  #   self: Boolean
  # }

  # type Recasters {
  #   count: Int
  # }

  # type Recasts {
  #   count: Int
  #   self: Boolean
  # }

  # type Watches {
  #   count: Int
  #   self: Boolean
  # }

  # type ReplyParentUsername {
  #   address: String
  #   username: String
  # }

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

  type Pfp {
    url: String
    verified: Boolean
  }

  type Bio {
    mentions: JSON
    text: String
  }

  type Profile {
    bio: Bio
  }

  type Author {
    displayName: String
    fid: Int
    followerCount: Int
    followingCount: Int
    pfp: Pfp
    profile: Profile
    username: String
  }

  type Pfp14 {
    url: String
    verified: Boolean
  }

  type Bio16 {
    mentions: JSON
    text: String
  }

  type Profile15 {
    bio: Bio16
  }

  type ParentAuthor {
    displayName: String
    fid: Int
    followerCount: Int
    followingCount: Int
    pfp: Pfp14
    profile: Profile15
    username: String
  }

  type Reactions {
    count: Int
  }

  type Recasts {
    count: Int
    recasters: JSON
  }

  type Replies {
    count: Int
  }

  type ViewerContext {
    reacted: Boolean
    recast: Boolean
    watched: Boolean
  }

  type Watches {
    count: Int
  }

  type Activity {
    author: Author
    hash: String
    parentAuthor: ParentAuthor
    parentHash: String
    reactions: Reactions
    recasts: Recasts
    replies: Replies
    text: String
    threadHash: String
    timestamp: String
    viewerContext: ViewerContext
    watches: Watches
  }

  type Query {
    getCasts(userName: String!): Activity! @skipAuth
    getActivity(userName: String!): AllActivity! @skipAuth
    getUserDetails(userName: String!): UserDetails! @skipAuth
  }

  type Mutation {
    updateFarcasterProfiles(input: String): [Anyone] @skipAuth
  }
`
