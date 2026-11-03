import type { JSXElement } from "solid-js";

type Props = {
  children: JSXElement,
  onClick: () => void
}

export default function PillBtn(props: Props) {
  return (
    <button {...props} />
  );
}