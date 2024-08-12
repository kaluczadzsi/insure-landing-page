export interface ButtonProps {
  variant?: ButtonVariants;
  children: React.ReactNode;
  href: string;
}

export enum ButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}
