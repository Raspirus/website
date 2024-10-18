import { JSX } from "preact/jsx-runtime";

interface LinkButtonProps {
  class: string;
  to: string;
  children: JSX.Element | JSX.Element[];
}

const LinkButton = ({ class: className, to, children }: LinkButtonProps) => {
  return (
    <a
      href={to}
      class={`${className}`}
    >
      {children}
    </a>
  );
};

export default LinkButton;
