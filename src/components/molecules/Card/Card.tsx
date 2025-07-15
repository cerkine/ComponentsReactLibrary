import './card.css';
import React from 'react';

/*
All of parameters are optional
title: Title of card, can be a Component or plain text
subtitle: Subtitle of card, can be a Component or plain text
content: Content of card, can be a Component or plain text
image: Image of card, can be a Component or plain text
footer: Footer of card, can be a Component or plain text
textColor: Color of text font
backgroundColor: Color of background table
hoverEffect: Activate or desactivate hover of card
hoverColor: Color of hover when selecting row
bordered: Activate or desactivate border of card
borderColor: Color of border
rounded: Selector of rounded style level
shadow: Selector of shadow background style level
*/
export interface CardProps {
    size: 'small' | 'medium' | 'large';
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    content?: React.ReactNode;
    image?: React.ReactNode;
    footer?: React.ReactNode;
    textColor?: string;
    backgroundColor?: string;
    hoverEffect?: boolean;
    hoverColor?: string;
    border?: 'none' | 'default' | 'strong';
    borderColor?: string;
    rounded?: 'none' | 'medium' | 'strong';
    shadow?: 'none' | 'default' | 'strong';
}

export const Card = ({
    size,
    title,
    subtitle,
    content,
    image,
    footer,
    textColor = '#000',
    backgroundColor = '#fff',
    hoverEffect = false,
    hoverColor = '#f5f5f5',
    border = 'none',
    borderColor = '#ddd',
    shadow = 'none',
    rounded = 'none',
}: CardProps) => {
    const className = [
        'card',
        `card-${size}`,
        `card-rounded-${rounded}`,
        `card-shadow-${shadow}`,
        `card-border-${border}`,
        hoverEffect && 'hover',
    ].filter(Boolean).join(' ');

    const styleVars = {
        '--card-bg': backgroundColor,
        '--card-text': textColor,
        '--card-border': borderColor,
        ...(hoverEffect && { '--card-hover': hoverColor }),
    } as React.CSSProperties;

    return (
        <div className={className} style={styleVars}>
            {title && <div className="card-title">{title}</div>}
            {image && <div className="card-image">{image}</div>}
            {subtitle && <div className="card-subtitle">{subtitle}</div>}
            {content && <div className="card-content">{content}</div>}
            {footer && <div className="card-footer">{footer}</div>}
        </div>
    );
};
