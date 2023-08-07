import React, { forwardRef, memo } from "react";
import { type CardProps } from "../card/card";
import clsx from "clsx";

interface GridProps extends CardProps {
  rowGap?: boolean;
}
export const Grid = memo(
  forwardRef<HTMLElement, GridProps>((props, ref) => {
    const { as: Tag = "div", children, className, rowGap, id, ...rest } = props;
    return (
      <Tag
        id={id}
        className={clsx(
          rowGap && "gap-12 lg:gap-6",
          className,
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {children}
      </Tag>
    );
  })
);

Grid.displayName = "Grid";
export {};
