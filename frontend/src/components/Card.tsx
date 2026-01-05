import React from "react";

interface CardProps {
    title: string, 
    imageUrl : string,
    description? : string,
    footerText? : string
}

const Card: React.FC<CardProps> = ({
    title, imageUrl, description,footerText
}) => {
    return (
        <>
        <div className="w-full h-100">
        {title && (
            <div className="font-bold text-xl">{title}</div>
        )}<br />
        {imageUrl && (
            <img src={imageUrl} alt={title} className="w-full h-52"/>
        )}
        <br />
        <div className="text-base font-normal italic">{description}</div>
        <br />
        <div className="italic font-bold">
            {footerText}
        </div>
    </div>
        </>
    )
    
}
/**
 * 
 * Have img, title, caption, buttonText, actionHref as params 
 */


export default Card;