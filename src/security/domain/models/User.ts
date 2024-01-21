import {Rank} from "@/security/domain/models/Rank.ts";

export interface User {
  avatar: string;
  contribution: number;
  country: string;
  friendOfCount: number;
  handle: string;
  lastOnlineTimeSeconds: number;
  maxRank: Rank;
  maxRating: number;
  organization: string;
  rank: Rank;
  rating: number;
  registrationTimeSeconds: number;
  titlePhoto: string;
  preferredProfilePicture?:  string;
  preferredHandle?: string;
}