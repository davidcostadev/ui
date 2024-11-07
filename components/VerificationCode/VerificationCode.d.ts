import { Component } from '../../../node_modules/.pnpm/react@18.3.1/node_modules/react';

interface ReactCodeInputProps {
    type?: 'text' | 'number';
    onChange?: (val: string) => void;
    onComplete?: (val: string) => void;
    onFocus?: () => void;
    id?: string;
    fields?: number;
    loading?: boolean;
    title?: string;
    fieldWidth?: any;
    fieldHeight?: any;
    autoFocus?: boolean;
    className?: string;
    values?: string[];
    disabled?: boolean;
    required?: boolean;
    placeholder?: string[];
}
export declare class ReactCodeInput extends Component<ReactCodeInputProps, any> {
    static defaultProps: {
        type: string;
        fields: number;
        fieldWidth: number;
        fieldHeight: number;
        autoFocus: boolean;
        disabled: boolean;
        required: boolean;
        placeholder: never[];
    };
    iRefs: any[];
    id: number;
    constructor(props: ReactCodeInputProps);
    /**
     * Clear all field value & focus first field
     */
    __clearvalues__: () => void;
    triggerChange: (values?: any) => void;
    triggerFocus: () => void;
    onChange: (e: any) => void;
    onKeyDown: (e: any) => void;
    onFocus: (e: any) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default ReactCodeInput;
