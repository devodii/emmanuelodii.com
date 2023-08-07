import clsx from "clsx";
import { ElementType, ReactNode, forwardRef, memo } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
}

export const Card = memo(
  forwardRef<HTMLElement, CardProps>((props, ref) => {
    const { as: Tag = "div", children, className, id, ...rest } = props;

    return (
      <Tag ref={ref} {...rest} id={id} className={clsx("", className)}>
        {children}
      </Tag>
    );
  })
);

Card.displayName = "Card";
