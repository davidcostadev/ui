export type ButtonProps = {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
};
export declare const Button: ({ className, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
