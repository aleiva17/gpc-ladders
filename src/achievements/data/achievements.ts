import {Achievement} from "@/achievements/domain/model/Achievement.ts";
import {NormalizeProgrammingLanguagePipe} from "@/statistics/pipes/NormalizeProgrammingLanguagePipe.ts";
import {getProgrammingLanguagesSortedByFrequency} from "@/statistics/services/ProgrammingLanguagesService.ts";
import {CodeforcesRankToInteger} from "@/achievements/pipes/CodeforcesRankToInteger.ts";
import {getUniqueAcceptedSubmissions} from "@/problems/services/SubmissionService.ts";

export const achievements: Array<Achievement> = [
  {
    title: "Versatile Programmer",
    description: "Uses 5 different programming languages in accepted solutions.",
    badgeBorderStyle: {
      backgroundColor: "#14b8a6"
    },
    imageUrl: "https://i.imgur.com/Xj4iEcn.png",
    getCurrentSteps: ({acceptedSubmissions}) => {
      return getProgrammingLanguagesSortedByFrequency(acceptedSubmissions).length;
    },
    totalSteps: 5
  },
  {
    title: "Quantum Programmer",
    description: "Have 5 accepted solutions using Q#.",
    badgeBorderStyle: {
      background: "linear-gradient(180deg, rgba(86,227,255,1) 0%, rgba(9,107,255,1) 100%)"
    },
    imageUrl: "https://i.imgur.com/TGe1AH3.png",
    getCurrentSteps: ({acceptedSubmissions}) => {
      return acceptedSubmissions.reduce(
        (count, submission) => {
          const language = NormalizeProgrammingLanguagePipe.transform(submission.programmingLanguage);
          return language === "Q#" ? count + 1 : count;
        },
        0
      )
    },
    totalSteps: 5
  },
  {
    title: "Community promoter",
    description: "Obtain 20 contribution points.",
    badgeBorderStyle: {
      backgroundColor: "#fa4f8d"
    },
    imageUrl: "https://i.imgur.com/DhmBeRB.png",
    getCurrentSteps: ({user}) => user.contribution,
    totalSteps: 20
  },
  {
    title: "Byte buddy",
    description: "Get 50 friends.",
    badgeBorderStyle: {
      backgroundColor: "#a855f7"
    },
    imageUrl: "https://i.imgur.com/BX4zY49.png",
    getCurrentSteps: ({user}) => user.friendOfCount,
    totalSteps: 50
  },
  {
    title: "Another day, another dollar",
    description: "1 year with your account.",
    badgeBorderStyle: {
      backgroundColor: "#4338ca"
    },
    imageUrl: "https://i.imgur.com/FoVNNLk.png",
    getCurrentSteps: ({user}) => {
      const creationTime = user.registrationTimeSeconds;

      const oneYearInSeconds = 365 * 24 * 60 * 60;
      const nowInSeconds = Math.floor(Date.now() / 1000);

      return (nowInSeconds >= creationTime + oneYearInSeconds ? 1 : 0);
    },
    totalSteps: 1
  },
  {
    title: "Who reads blogs nowadays?",
    description: "Write 3 blog posts.",
    badgeBorderStyle: {
      backgroundColor: "#22d3ee"
    },
    imageUrl: "https://i.imgur.com/y7r2d2P.png",
    getCurrentSteps: ({blogPosts}) => blogPosts.length,
    totalSteps: 3
  },
  {
    title: "1 << 8",
    description: "Solve 256 problems.",
    badgeBorderStyle: {
      backgroundColor: "#FF5757"
    },
    imageUrl: "https://i.imgur.com/TWUhFqn.png",
    getCurrentSteps: ({acceptedSubmissions}) => {
      const problemsSeen = new Set<string>();

      acceptedSubmissions.forEach(submission => {
        const id = `${submission.problem.contestId}${submission.problem.index}`;
        problemsSeen.add(id);
      });

      return problemsSeen.size;
    },
    totalSteps: 256
  },
  {
    title: "(1 << 4) × (1 + (12 << 1))",
    description: "Solve 400 problems.",
    badgeBorderStyle: {
      background: "linear-gradient(180deg, hsla(307, 93%, 84%, 1) 0%, hsla(256, 96%, 44%, 1) 100%)"
    },
    imageUrl: "https://i.imgur.com/08TJwZX.png",
    getCurrentSteps: ({acceptedSubmissions}) => {
      const problemsSeen = new Set<string>();

      acceptedSubmissions.forEach(submission => {
        const id = `${submission.problem.contestId}${submission.problem.index}`;
        problemsSeen.add(id);
      });

      return problemsSeen.size;
    },
    totalSteps: 400
  },
  {
    title: "Dev psycho 100",
    description: "Be part of the top 100 in a contest.",
    badgeBorderStyle: {
      background: "linear-gradient(90deg, hsla(33, 100%, 53%, 1) 0%, hsla(58, 100%, 68%, 1) 100%)"
    },
    imageUrl: "https://i.imgur.com/p3SLRfE.png",
    getCurrentSteps: ({ratingChanges}) => ratingChanges.find(contest => contest.rank <= 100) ? 1 : 0,
    totalSteps: 1
  },
  {
    title: "YO WTF",
    description: "Get a MEMORY LIMIT EXCEEDED as verdict.",
    badgeBorderStyle: {
      backgroundColor: "#fb923c"
    },
    imageUrl: "https://i.imgur.com/tnxeqpi.png",
    getCurrentSteps: ({submissions}) => {
      return submissions.find(submission => submission.verdict === "MEMORY_LIMIT_EXCEEDED") ? 1 : 0;
    },
    totalSteps: 1
  },
  {
    title: "Hyori ittai",
    description: "Solve a problem that has an easy and a hard version.",
    badgeBorderStyle: {
      backgroundColor: "#16a34a"
    },
    imageUrl: "https://i.imgur.com/P5I0zhn.png",
    getCurrentSteps: ({acceptedSubmissions}) => {
      const problemIndexesByContestId: Map<number, Array<string>> = new Map();

      acceptedSubmissions.forEach(submission => {
        if (!problemIndexesByContestId.has(submission.problem.contestId)) {
          problemIndexesByContestId.set(submission.problem.contestId, []);
        }

        const solutions = problemIndexesByContestId.get(submission.problem.contestId)!;

        if (!solutions.includes(submission.problem.index)) {
          solutions.push(submission.problem.index);
        }
      });

      for (const indexes of problemIndexesByContestId.values()) {
        if (indexes.reduce((count, index) => count + (index.length > 1 ? 1 : 0), 0)) {
          return 1;
        }
      }

      return 0;
    },
    totalSteps: 1
  },
  {
    title: "The Sound Five",
    description: "Get COMPILATION ERROR, RUNTIME ERROR, WRONG ANSWER, TIME LIMIT EXCEEDED and MEMORY LIMIT EXCEEDED in the same problem.",
    badgeBorderStyle: {
      backgroundColor: "#818cf8"
    },
    imageUrl: "https://i.imgur.com/4L1b5n6.png",
    getCurrentSteps: ({submissions}) => {
      const validVerdicts = ["COMPILATION_ERROR", "RUNTIME_ERROR", "WRONG_ANSWER", "TIME_LIMIT_EXCEEDED", "MEMORY_LIMIT_EXCEEDED"];
      const verdictsById: Map<string, Set<string>> = new Map();

      submissions.forEach(submission => {
        if (!validVerdicts.includes(submission.verdict)) {
          return;
        }

        const id = `${submission.problem.contestId}${submission.problem.index}`;

        if (!verdictsById.has(id)) {
          verdictsById.set(id, new Set());
        }

        const currentVerdicts = verdictsById.get(id)!;
        currentVerdicts.add(submission.verdict);
      });

      for (const verdicts of verdictsById.values()) {
        if (verdicts.size === validVerdicts.length) {
          return 1;
        }
      }

      return 0;
    },
    totalSteps: 1
  },
  {
    title: "Password: admin",
    description: "Be hacked into a solution.",
    badgeBorderStyle: {
      backgroundColor: "#ffc42c"
    },
    imageUrl: "https://i.imgur.com/G4A66YT.png",
    getCurrentSteps: ({submissions}) => {
      return submissions.find(submission => submission.verdict === "CHALLENGED") ? 1 : 0;
    },
    totalSteps: 1
  },
  {
    title: "Graphter",
    description: "Obtain 64 solutions in graph problems.",
    badgeBorderStyle: {
      backgroundColor: "#ec116b"
    },
    imageUrl: "https://i.imgur.com/Q0RAwjz.png",
    getCurrentSteps: ({acceptedSubmissions}) => {
      const uniqueSubmissions = getUniqueAcceptedSubmissions(acceptedSubmissions);
      return uniqueSubmissions.reduce(
        (count, submission) => {
          const exist = submission.problem.tags.find(tag => tag === "graphs") ? 1 : 0;
          return count + exist;
        },
        0
      );
    },
    totalSteps: 64
  },
  {
    title: "Dynamic",
    description: "Obtain 64 solutions in dynamic programming problems.",
    badgeBorderStyle: {
      backgroundColor: "#6398f6"
    },
    imageUrl: "https://i.imgur.com/gngv7uM.png",
    getCurrentSteps: ({acceptedSubmissions}) => {
      const uniqueSubmissions = getUniqueAcceptedSubmissions(acceptedSubmissions);
      return uniqueSubmissions.reduce(
        (count, submission) => {
          const exist = submission.problem.tags.find(tag => tag === "dp") ? 1 : 0;
          return count + exist;
        },
        0
      );
    },
    totalSteps: 64
  },
  {
    title: "Constructor",
    description: "Obtain 64 solutions in constructive problems.",
    badgeBorderStyle: {
      backgroundColor: "#fed557"
    },
    imageUrl: "https://i.imgur.com/8gt6ylj.png",
    getCurrentSteps: ({acceptedSubmissions}) => {
      const uniqueSubmissions = getUniqueAcceptedSubmissions(acceptedSubmissions);
      return uniqueSubmissions.reduce(
        (count, submission) => {
          const exist = submission.problem.tags.find(tag => tag === "constructive algorithms") ? 1 : 0;
          return count + exist;
        },
        0
      );
    },
    totalSteps: 64
  },
  {
    title: "Mathematician",
    description: "Obtain 64 solutions in math problems.",
    badgeBorderStyle: {
      backgroundColor: "#1d4ed8"
    },
    imageUrl: "https://i.imgur.com/PZPvI1u.png",
    getCurrentSteps: ({acceptedSubmissions}) => {
      const uniqueSubmissions = getUniqueAcceptedSubmissions(acceptedSubmissions);
      return uniqueSubmissions.reduce(
        (count, submission) => {
          const exist = submission.problem.tags.find(tag => tag === "math") ? 1 : 0;
          return count + exist;
        },
        0
      );
    },
    totalSteps: 64
  },
  {
    title: "A lot of text",
    description: "Obtain 64 solutions in string problems.",
    badgeBorderStyle: {
      backgroundColor: "#10b981"
    },
    imageUrl: "https://i.imgur.com/jTKR2z2.png",
    getCurrentSteps: ({acceptedSubmissions}) => {
      const uniqueSubmissions = getUniqueAcceptedSubmissions(acceptedSubmissions);
      return uniqueSubmissions.reduce(
        (count, submission) => {
          const exist = submission.problem.tags.find(tag => tag === "strings") ? 1 : 0;
          return count + exist;
        },
        0
      );
    },
    totalSteps: 64
  },
  {
    title: "Div 3 Enjoyer",
    description: "Obtain the rank of Specialist.",
    badgeBorderStyle: {
      backgroundColor: "#03A89E"
    },
    imageUrl: "https://i.imgur.com/9U6CUFQ.png",
    getCurrentSteps: ({user}) => {
      const rankAsInteger = CodeforcesRankToInteger.transform(user.maxRank);
      const expectedRankAsInteger = CodeforcesRankToInteger.transform("specialist");
      return rankAsInteger >= expectedRankAsInteger ? 1 : 0
    },
    totalSteps: 1
  },
  {
    title: "Div 2 Enjoyer",
    description: "Obtain the rank of Expert.",
    badgeBorderStyle: {
      backgroundColor: "#0000ff"
    },
    imageUrl: "https://i.imgur.com/zQIuCk4.png",
    getCurrentSteps: ({user}) => {
      const rankAsInteger = CodeforcesRankToInteger.transform(user.maxRank);
      const expectedRankAsInteger = CodeforcesRankToInteger.transform("expert");
      return rankAsInteger >= expectedRankAsInteger ? 1 : 0
    },
    totalSteps: 1
  },
  {
    title: "Div 1 Enjoyer",
    description: "Obtain the rank of Master.",
    badgeBorderStyle: {
      background: "linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%)"
    },
    imageUrl: "https://i.imgur.com/KoeNrzh.png",
    getCurrentSteps: ({user}) => {
      const rankAsInteger = CodeforcesRankToInteger.transform(user.maxRank);
      const expectedRankAsInteger = CodeforcesRankToInteger.transform("master");
      return rankAsInteger >= expectedRankAsInteger ? 1 : 0
    },
    totalSteps: 1
  },
  {
    title: "GPC Developer",
    description: "Contribute to the source code of GPC Ladders.",
    badgeBorderStyle: {
      background: "linear-gradient(90deg, rgba(140,82,255,1) 0%, rgba(92,225,230,1) 100%)"
    },
    imageUrl: "https://i.imgur.com/BAIybYP.png",
    getCurrentSteps: ({user}) => {
      const devs = ["python_is_slow"]; // I'm not going to create a backend for this lol
      return devs.includes(user.handle.toLowerCase()) ? 1 : 0;
    },
    totalSteps: 1
  },
] as const;