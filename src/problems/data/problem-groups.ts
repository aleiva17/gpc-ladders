import {ProblemGroup} from "@/problem-list/domain/model/ProblemGroup.ts";

export const problemGroups: Array<ProblemGroup> = [
  {
    id: "a2oj",
    title: "Classic A2OJ",
    description: "List of classic A2OJ Ladders problems according to your rating.",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/5522/5522528.png",
    tags: ["All levels", "By rating"]
  },
  {
    id: "colin-galen",
    title: "Colin Galen's topic streams",
    description: "List of problems of an International Grandmaster in Codeforces to practice according to the desired topic.",
    imgUrl: "https://yt3.ggpht.com/ytc/AMLnZu-u5zVQafsoLEkr1fCc3qRbZVerAHH94IJ8Q6_biw=s900-c-k-c0x00ffffff-no-rj",
    tags: ["Advanced", "With video solution", "By topic"]
  },
  {
    id: "rmg",
    title: "Introduction by Rodolfo Mercado",
    description: "List of problems from a coach of several Peruvian ICPC teams for beginners in competitive programming.",
    imgUrl: "https://avatars.githubusercontent.com/u/16522027?v=4",
    tags: ["Introductory", "Beginner friendly", "By topic"]
  },
  {
    id: "racso",
    title: "Racso's chosen ones",
    description: "List of problem from top 1 in Leetcode Peru and top 5 worldwide in 2019 ICPC World Finals.",
    imgUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/d978f998-edd5-4fbc-8815-15b12ea7bf24-profile_image-150x150.png",
    tags: ["Advanced", "Data Structures", "By topic"]
  }
] as const;