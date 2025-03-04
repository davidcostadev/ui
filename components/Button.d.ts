export type ButtonProps = {
    isActive?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export declare const Button: ({ className, isActive, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
