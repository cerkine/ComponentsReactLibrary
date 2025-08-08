import { Input, type InputProps } from '../../atoms/Input/Input';
import './card.css';

export interface DataInputProps {
    type: InputProps['type'];
    label: InputProps['label'];
    placeholder?: InputProps['placeholder'];
}

export interface CardProps {

    data: DataInputProps[];
}

export const Card = ({
    data

}: CardProps) => {
    const className = [
        'card',

    ].filter(Boolean).join(' ');


    return (
        <div className={className}>
            {data.map((v) => (
                <Input type={v.type} label={v.label} placeholder={v.placeholder}/>
            ))}
        </div>
    );
};
