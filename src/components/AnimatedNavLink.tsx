import React, {
  AnchorHTMLAttributes,
  MouseEvent,
  MouseEventHandler,
  MutableRefObject,
  useCallback,
  useRef,
} from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

export default function AnimatedNavLink({
  htmlAttributes = {},
  to,
  classNameOnCurrent,
  onBeforeChange,
  onAfterChange,
  animationDuration,
  children,
}: {
  htmlAttributes?: AnchorHTMLAttributes<HTMLAnchorElement>;
  to: string;
  classNameOnCurrent: string;
  onBeforeChange: () => void;
  onAfterChange: () => void;
  animationDuration: number;
  children: string;
}) {
  const navigate: NavigateFunction = useNavigate();
  const timeoutIDRef: MutableRefObject<number | null> = useRef<number | null>(null);

  const onClickEvent: MouseEventHandler = useCallback<MouseEventHandler>((event: MouseEvent) => {
    event.preventDefault();
    console.log(location);
    if (location.pathname === to) return;

    if (timeoutIDRef.current !== null) window.clearTimeout(timeoutIDRef.current);
    onBeforeChange();
    timeoutIDRef.current = window.setTimeout(() => {
      onAfterChange();
      navigate(to);
    }, animationDuration);
  }, []);

  return (
    <a
      href={to}
      {...htmlAttributes}
      className={location.pathname === to ? classNameOnCurrent : ""}
      onClick={onClickEvent}
    >
      {children}
    </a>
  );
}
