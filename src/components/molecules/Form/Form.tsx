import { Input, type InputProps } from '../../atoms/Input/Input';
import './form.css';

export interface DataInputProps {
    type: InputProps['type'];
    label: InputProps['label'];
    placeholder?: InputProps['placeholder'];
}

export interface FormProps {

    data: DataInputProps[];
}

export const Form = ({
    data

}: FormProps) => {
    const className = [
        'form',

    ].filter(Boolean).join(' ');


    return (
        <div className={className}>
            {data.map((v) => (
                <Input type={v.type} label={v.label} placeholder={v.placeholder}/>
            ))}
        </div>
    );
};
