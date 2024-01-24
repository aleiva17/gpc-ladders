import {SelectableIcon} from "@/settings/components/SelectableIcon.tsx";
import {AppIconGroup} from "@/settings/domain/model/AppIconGroup.ts";
import {ReactElement} from "react";

type IconGroupProps = {
  group: AppIconGroup
  onIconSelect: () => void
}

export const IconGroup = ({ group, onIconSelect }: IconGroupProps): ReactElement => {
  return (
    <div>
      <h2 className="text-lg font-bold">{group.name}</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-center items-center gap-1 md:gap-8">
        {
          group.icons.map((iconUrl, id) =>
            <SelectableIcon
              key={id}
              iconUrl={`/app-icons/${iconUrl}`}
              onSelect={onIconSelect}
            />
          )
        }
      </div>
    </div>
  );
};