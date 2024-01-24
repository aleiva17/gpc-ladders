import {ReactElement, useEffect, useRef, useState} from "react";
import {User} from "@/security/domain/models/User.ts";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {useUserStore} from "@/security/stores/useUserStore.ts";
import {ProgressSpinner} from "primereact/progressspinner";
import {getSubmissions} from "@/problems/services/SubmissionService.ts";
import {toast} from "react-toastify";
import {ComparisonStats} from "@/statistics/components/ComparisonStats.tsx";

type CompareWithMeProps = {
  spiedUser: User;
  spiedSubmissions: Array<Submission>;
}

export const CompareWithMe = ({spiedUser, spiedSubmissions}: CompareWithMeProps): ReactElement => {
  const myProfile = useUserStore(state => state.user)!;
  const [mySubmissions, setMySubmissions] = useState<Array<Submission>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const abortController = useRef<AbortController>();

  useEffect(() => {
    setLoading(true);
    abortController.current = new AbortController();

    getSubmissions(myProfile.handle, abortController.current.signal)
      .then(setMySubmissions)
      .catch((error) => {
        if (error.code === "ERR_CANCELED") {
          return;
        }
        toast.error("An error occurred while fetching your submissions.", {
          type: "error",
          isLoading: false,
          autoClose: 3000
        });
      })
      .finally(() => setLoading(false));

    return () => abortController.current?.abort();
  }, [myProfile]);

  if (loading) {
    return (
      <div className="flex flex-col items-center">
        <ProgressSpinner
          style={{width: '50px', height: '50px'}}
          strokeWidth="8"
          className="mt-6"
          animationDuration=".5s"
        />
        <p className="mt-2 text-complementary-light dark:text-complementary-dark">Retrieving your submission data...</p>
      </div>
    );
  }

  return (
    <ComparisonStats
      firstUserData={{user: spiedUser, submissions: spiedSubmissions}}
      secondUserData={{user: myProfile, submissions: mySubmissions}}
    />
  );
};