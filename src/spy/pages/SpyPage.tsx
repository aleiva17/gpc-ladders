import {ReactElement, useState} from "react";
import {BaseLayout} from "@/shared/layouts/BaseLayout.tsx";
import {GoBackButton} from "@/shared/components/GoBackButton.tsx";
import {User} from "@/security/domain/models/User.ts";
import {Submission} from "@/problems/domain/model/Submission.ts";
import {SearchHandleForm} from "@/shared/components/SearchHandleForm.tsx";
import {getUserInfoByHandle} from "@/security/services/LinkCodeforcesAccountService.ts";
import {getSubmissions} from "@/problems/services/SubmissionService.ts";
import {toast} from "react-toastify";
import {SpyUserContent} from "@/spy/components/SpyUserContent.tsx";

export const SpyPage = (): ReactElement => {
  const [spiedUser, setSpiedUser] = useState<User | undefined>(undefined);
  const [spiedUserSubmissions, setSpiedUserSubmissions] = useState<Array<Submission> | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const searchUserData = async (handle: string): Promise<void> => {
    const toastId = toast.loading(`Retrieving data from ${handle}`);
    setLoading(true);

    try {
      const response = await getUserInfoByHandle(handle);
      const user = response.data.result[0];

      setSpiedUser(user);

      toast.update(toastId, {
        render: `Getting ${handle} submissions`,
        type: "default",
        isLoading: true,
        autoClose: false
      });

      const submissions = await getSubmissions(handle);
      setSpiedUserSubmissions(submissions);

      toast.update(toastId, {
        render: "Data retrieved successfully",
        type: "success",
        isLoading: false,
        autoClose: 2000
      });
    }
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    catch (error: any) {
      const message = error.response ? error.response.data?.message : error.message;
      toast.update(toastId, {
        render: `Error: ${message}`,
        type: "error",
        isLoading: false,
        autoClose: 2000
      });
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <BaseLayout>
      <div className="flex justify-center bg-gray-50 dark:bg-dark h-full">
        <div className="flex flex-col w-full max-w-screen-xl p-6">
          <h1 className="text-5xl font-bold border-b-2 border-complementary-light dark:border-complementary-dark w-fit py-4 self-center text-center">Spy</h1>
          <GoBackButton destination="/"/>
          <SearchHandleForm
            onSearch={searchUserData}
            clearAfterSearch
          />
          <SpyUserContent
            user={spiedUser}
            submissions={spiedUserSubmissions}
            loading={loading}
          />
        </div>
      </div>
    </BaseLayout>
  );
};