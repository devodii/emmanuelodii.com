import clsx from "clsx";
import { HTMLAttributes, MouseEventHandler, forwardRef, memo } from "react";

type Props = {
  variant: "primary" | "secodary";
  className: string;
  text: string;
  onclick?: MouseEventHandler<HTMLButtonElement>;
};

// ? Memo to avoid re-rendering this component in future parent components when props haven't changed.
export const Button = memo(
  forwardRef<HTMLButtonElement, Props>(
    ({ text, variant, className, ...rest }: Props, ref) => {
      return (
        <button
          ref={ref}
          {...rest}
          className={clsx(
            variant === "primary" && "bg-[#4f46e5]",
            "py-2 text-lg rounded-md hover:bg-indigo-600/80  text-white",
            className
          )}
        >
          {text}
        </button>
      );
    }
  )
);
Button.displayName = "Button";
