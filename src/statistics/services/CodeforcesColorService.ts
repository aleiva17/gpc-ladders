import {Rank} from "@/security/domain/models/Rank.ts";

const rankToColor: Record<Rank, string> = {
  "newbie": "#808080",
  "pupil": "#008000",
  "specialist": "#03A89E",
  "expert": "#0000ff",
  "candidate master": "#a0a",
  "master": "#ff8c00",
  "international master": "#ff8c00",
  "grandmaster": "#ff0000",
  "legendary grandmaster": "#ff0000"
} as const;

export const getColorStyleFromRank = (rank: Rank) => {
  return { color: rankToColor[rank] ?? "#808080" };
}

export const getContributionColor = (contribution: number) => {
  return contribution === 0
    ? "text-black"
    : contribution > 0
      ? "text-green-500"
      : "text-red-500";
}