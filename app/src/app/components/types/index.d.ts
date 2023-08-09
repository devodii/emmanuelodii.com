import {
  InputHTMLAttributes,
  ButtonHTMLAttributes,
  TextareaHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

export type StackType = {
  name: string;
  src: string;
};

export type StackTypeArray = Array<StackType>;

export interface Article {
  title: string;
  date: string;
  shortContent: string;
  href: string;
  issueNumber?: number;
}

export interface ContactFieldType {
  name: string;
  email: string;
  message: string;
}

// ? Allow native HTML Props, only add extras
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secodary";
  text: string;
  onclick?: MouseEventHandler<HTMLButtonElement>;
}
