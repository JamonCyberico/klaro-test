import { ReactNode } from "react";

type TBaseButtonVariant = 'default' | 'hyperlink';

export interface IBaseButtonProps {
  children: ReactNode;
  variant?: TBaseButtonVariant;
  onClick?: () => void;
}
