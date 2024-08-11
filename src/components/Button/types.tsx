export interface ButtonProps {
  href: string;
  isMobile: boolean;
  isLast: boolean;
  children: React.ReactNode;
  additionalStyles?: React.CSSProperties;
}
