import {ReactElement} from "react";

type ConditionalWrapperProps = {
  condition: boolean;
  wrapper: (props: ReactElement | Array<ReactElement>) => ReactElement;
  children: ReactElement;
}

export const ConditionalWrapper = ({ condition, wrapper, children }: ConditionalWrapperProps) =>
  condition ? wrapper(children) : children;