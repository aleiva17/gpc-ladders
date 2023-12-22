import {ReactElement} from "react";
import {BaseLayout} from "@/shared/layouts/BaseLayout.tsx";
import {useTypewriter} from "@/shared/hooks/useTypewriter.tsx";
import {LoginForm} from "@/security/components/LoginForm.tsx";

export const LoginPage = (): ReactElement => {
  const { text } = useTypewriter({
    words: [
      "Level up your coding skills",
      "Practice with exercises tailored to your level",
      "Review and practice key concepts",
      "Track your progress",
      "Challenge yourself by competing with friends"
    ],
    loop: true
  })

  return (
    <BaseLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-animated-grids h-full p-4">
        <section className="flex justify-center items-center">
          <LoginForm/>
        </section>
        <section
          className="hidden md:flex justify-center items-center font-bold text-center text-5xl md:text-6xl lg:text-7xl px-12">
          <p className="dark:text-white drop-shadow-lg">
            {text}
            <span className="font-bold text-gpc-purple dark:text-gpc-aqua">|</span>
          </p>
        </section>
      </div>
    </BaseLayout>
  );
};