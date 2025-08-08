import { Label } from "../../atoms/Label/Label";
import { Input } from "../../atoms/Input/Input";
import './FormInput.css';


/**
 * Props for the FormInput component.
 * @property label - The label text for the input field.
 * @property type - The type of the input field (e.g., 'text', 'email', 'password').
 * @property placeholder - Placeholder text for the input field.
 * @property value - The current value of the input field.
 * @property onChange - Function to call when the input value changes.
 * @property error - Optional error message to display below the input field.
 */
export interface FormInputProps {
    label: string;
    type?: 'text' | 'email' | 'password' | 'number';
    placeholder: string;
    value?: string;
    onChange?: (value: string) => void;
    error?: string;
}


export const FormInput = ({
    label,
    type = 'text',
    placeholder,
    value,
}: FormInputProps) => {

    return (
        <div className="form-input">
            <Label text={label} />
            <Input
                type={type}
                placeholder={placeholder}
                value={value}
            />
        </div>
    );

    
};