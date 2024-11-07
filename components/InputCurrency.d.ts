type Props = {
    value: number;
    lang: string;
    currency: string;
    noDecimal?: boolean;
    onChange: (value: number) => void;
    className?: string;
};
export declare const InputCurrency: ({ value, lang, currency, noDecimal, onChange, className, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default InputCurrency;
