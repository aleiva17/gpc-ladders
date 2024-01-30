import {Rank} from "@/security/domain/models/Rank.ts";

export class CodeforcesRankToInteger {
  static transform(rank: Rank): number {
    const values: Record<Rank, number> = {
      "newbie": 1,
      "pupil": 2,
      "specialist": 3,
      "expert": 4,
      "candidate master": 5,
      "master": 6,
      "international master": 7,
      "grandmaster": 8,
      "legendary grandmaster": 9
    };
    return values[rank];
  }
}