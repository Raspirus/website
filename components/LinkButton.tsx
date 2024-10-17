import { h } from "preact";
import { JSX } from "preact/jsx-runtime";

interface LinkButtonProps {
  color: string;
  class: string;
  to: string;
  target?: string;
  children: JSX.Element | JSX.Element[];
}

const LinkButton = ({ color, class: className, to, target, children }: LinkButtonProps) => {
  return (
    <a
      href={to}
      target={target}
      class={`bg-${color} ${className}`}
    >
      {children}
    </a>
  );
};

export default LinkButton;