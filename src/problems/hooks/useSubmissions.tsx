import {useEffect, useRef, useState} from "react";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {
  getSubmissions,
  getLastSubmissionInfo,
  getSetsOfSubmissionsFilteredByStatus
} from "@/problems/services/SubmissionService.ts";

type useSubmissionsProps = {
  username: string;
  onError: (error: string) => void;
  defaultLastSubmissionTime? : number;
}

export const useSubmissions = ({ username, onError, defaultLastSubmissionTime }: useSubmissionsProps) => {
  const [submissions, setSubmissions] = useState<Array<Submission>>([]);
  const [acceptedSubmissions, setAcceptedSubmissions] = useState<Set<string>>(new Set<string>());
  const [wrongSubmissions, setWrongSubmissions] = useState<Set<string>>(new Set<string>());

  const lastSubmissionTime = useRef<number>(defaultLastSubmissionTime ?? 0);
  const intervalRef = useRef<NodeJS.Timeout>();
  const refreshTimeInMs: number = 5000;

  useEffect(() => {
    const refreshSubmissions = async () => {
      const { time, state} = await getLastSubmissionInfo(username);

      if (time === lastSubmissionTime.current || state === "TESTING") {
        return;
      }

      lastSubmissionTime.current = time;

      const submissions = await getSubmissions(username);
      setSubmissions(submissions);
    };

    getSubmissions(username)
      .then(submissions => {
        setSubmissions(submissions);
        intervalRef.current = setInterval(() => refreshSubmissions(), refreshTimeInMs);
      })
      .catch((error: Error | string) => {
        onError(typeof(error) === "string" ? error : error.message);
      });

    return () => clearInterval(intervalRef.current);
  }, [username, onError]);

  useEffect(() => {
    const { acceptedSubmissions, wrongSubmissions } = getSetsOfSubmissionsFilteredByStatus(submissions);
    setAcceptedSubmissions(acceptedSubmissions);
    setWrongSubmissions(wrongSubmissions);
  }, [submissions]);

  return { submissions, acceptedSubmissions, wrongSubmissions } as const;
}