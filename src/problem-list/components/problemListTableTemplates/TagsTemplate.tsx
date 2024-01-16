import {ReactElement} from "react";

export const TagsTemplate = (tags: Array<string>): ReactElement => {
  return (
    <div className="flex flex-wrap gap-1.5">
      {
        tags.map((tag, id) =>
          <span
            key={id}
            className="text-xs font-bold text-center whitespace-nowrap bg-gray-300 rounded-full px-1.5 py-0.5"
          >
            {tag}
          </span>
        )
      }
    </div>
  );
};