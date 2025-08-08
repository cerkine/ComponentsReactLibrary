import { useState, type FocusEvent, type FocusEventHandler } from 'react';
import { Label } from '../Label/Label';
import './Input.css';


/**
 * Generated Input component props interface.
 */
export interface InputProps {
    type: 'text' | 'password' | 'email' | 'number';
    label: string;
    placeholder?: string;
    size?: 'small' | 'medium' | 'large';
    textColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: 'none' | 'small' | 'medium' | 'large';
    shadow?: 'none' | 'default' | 'strong';
    disabled?: boolean;
    required?: boolean;
    autoFocus?: boolean;
    value?: string;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
}

export const Input = ({
    type,
    label,
    placeholder = '',
    size = 'medium',
    textColor = '#000000',
    backgroundColor = '#ffffff',
    borderColor = '#cccccc',
    borderRadius = 'medium',
    shadow = 'none',
    disabled = false,
    required = false,
    autoFocus = false,
    onFocus = (() => { }),
    onBlur = (() => { })
}: InputProps) => {
    const [labelValue, setLabelValue] = useState<string | undefined>(undefined);
    const changeOnFocus: FocusEventHandler<HTMLInputElement> = (event) => {
        const element = event.target;
        if (!labelValue) {
            setLabelValue(element.placeholder);
            element.placeholder = placeholder;
        }

        onFocus(event);
    };

    const changeOnBlur: FocusEventHandler<HTMLInputElement> = (event) => {
        const element = event.target;


        if (!element.value || element.value == '') {
            element.placeholder = label;
            setLabelValue(undefined);
        }

        onBlur(event);
    }


    const classNames = [
        'input',
        `input-${size}`,
        `input-border-${borderRadius}`,
        `input-shadow-${shadow}`,
        disabled && 'input-disabled'
    ].filter(Boolean).join(" ");

    const style: React.CSSProperties = {
        color: textColor,
        backgroundColor,
        borderColor,
        ...(disabled && { cursor: 'not-allowed' }),
    };

    return (
        <div className='div-input'>
            <Label
                text={labelValue}
                color={borderColor}>
            </Label>
            <input
                type={type}
                placeholder={label}
                className={classNames}
                style={style}
                disabled={disabled}
                required={required}
                autoFocus={autoFocus}
                onFocus={changeOnFocus}
                onBlur={changeOnBlur}
            />
        </div>

    );


};