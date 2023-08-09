import clsx from "clsx";
import { forwardRef, memo } from "react";
import { ButtonProps } from "@/types";

// ? Memo to avoid re-rendering this component in future parent components when props haven't changed.
export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { className, text, variant, ...rest } = props;
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
  })
);
Button.displayName = "Button";
