export interface User {
  _id: string;
  name: string;
  username: string;
  password: string;
  profilePictureURL: string;
  bio: string;
  //   likes: string[];
  //   following: string[];
  //   followers: string[];
  // virtual fields
  //   noOfFollowers: number;
  //   noOfFollowing: number;
  //   posts: string[];
  //   noOPosts: number;
}
