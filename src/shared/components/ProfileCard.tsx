import {ReactElement} from "react";

type ProfileCardProps = {
  imageUrl: string
  name: string
}

export const ProfileCard = ({ imageUrl, name }: ProfileCardProps): ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <img
        className="rounded-full h-56 w-56 border-2 border-complementary-light dark:border-complementary-dark"
        src={ imageUrl }
        alt={`${name} profile picture.`}
      />
      <span className="text-lg text-center font-semibold">{ name }</span>
    </div>
  )
}