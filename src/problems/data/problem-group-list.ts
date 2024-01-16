import {ProblemGroupDetail} from "@/problem-list/domain/model/ProblemGroupDetail.ts";


export type ProblemGroupListContent = {
  "a2oj": ProblemGroupDetail;
  "colin-galen": ProblemGroupDetail;
  "rmg": ProblemGroupDetail;
  "racso": ProblemGroupDetail;
}

export const problemGroupList: ProblemGroupListContent = {
  "a2oj": {
    name: "Classic A2OJ",
    problems: [
      { id: "1300", name: "Rating < 1300" },
      { id: "1400", name: "Rating < 1400" },
      { id: "1500", name: "Rating < 1500" },
      { id: "1600", name: "Rating < 1600" },
      { id: "1700", name: "Rating < 1700" },
      { id: "1800", name: "Rating < 1800" },
      { id: "1900", name: "Rating < 1900" },
      { id: "2000", name: "Rating < 2000" },
      { id: "2100", name: "Rating < 2100" },
      { id: "2200", name: "Rating < 2200" },
      { id: "2200+", name: "Rating +2200" }
    ]
  },
  "colin-galen": {
    name: "Colin Galen's topic streams",
    problems: [
      { id: "dp", name: "Dynamic Programming"},
      { id: "trees", name: "Trees"},
      { id: "probability-combinatorics", name: "Probability & Combinatorics"},
      { id: "dp-optimizations", name: "Dynamic Programming Optimizations"},
      { id: "graphs", name: "Graphs"},
      { id: "bitwise", name: "Bitwise Operations"},
      { id: "number-theory", name: "Number Theory"}
    ]
  },
  "rmg": {
    name: "Introduction by Rodolfo Mercado",
    problems: [
      { id: "adhoc", name: "Ad hoc" },
      { id: "stl-cpp", name: "STL C++" },
      { id: "brute-force", name: "Brute Force" }
    ]
  },
  "racso": {
    name: "Racso's chosen ones",
    problems: [
      { id: "brute-force", name: "Brute Force" },
      { id: "recursion-backtracking", name: "Recursion & Backtracking" },
      { id: "bitmask", name: "Bitmask" },
      { id: "divide-and-conquer", name: "Divide & Conquer" },
      { id: "introduction-dp", name: "Introduction to DP" },
      { id: "basic-dp", name: "Basic DP" },
      { id: "advance-dp", name: "Advance DP" },
      { id: "tbap-scc", name: "Toposort, Bridges, Articulation points and SCC" },
      { id: "sss-paths", name: "Single Source Shortest Paths" },
      { id: "aps-paths", name: "All Pairs Shortest Paths" },
      { id: "mst", name: "Minimum Spanning Tree" },
      { id: "dsu", name: "Disjoint Set Union" },
      { id: "sparse-table", name: "Sparse Table" },
      { id: "bi-tree", name: "Binary Indexed Tree" },
      { id: "ss-tree", name: "Simple Segment Tree" },
      { id: "stack-and-sqrt", name: "Min-Max Stack Queue and SQRT Decomposition" },
      { id: "greedy", name: "Greedy" },
      { id: "kmp-and-z-function", name: "KMP and Z function" },
      { id: "aho-corasick", name: "Aho-Corasick Automaton" },
      { id: "suffix-array", name: "Suffix Array" },
      { id: "lazy-persistent-seg-tree", name: "Lazy Propagation and Persistent Segment Tree" },
      { id: "treap", name: "Treap" },
      { id: "heavy-light-decomposition", name: "Heavy-Light Decomposition" },
      { id: "centroid-decomposition", name: "Centroid Decomposition" }
    ]
  }
} as const;
