import clsx from "clsx";
import React, { forwardRef, memo } from "react";
import { TextAreaProps, InputProps } from "@/types";

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { className, ...rest } = props;
    return (
      <input
        ref={ref}
        className={clsx("py-2 px-4 rounded-md border w-full", className)}
        {...rest}
      />
    );
  })
);
export const TextArea = memo(
  forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
    const { className, ...rest } = props;
    return (
 
      <textarea
        {...rest}
        ref={ref}
        className={clsx("py-2 px-4 rounded-md border w-full", className)}
      ></textarea>
    );
  })
);

export {};
