import type { JSX } from "react";
import type { CardProps } from "../type";


export default function CardTestimonial( { className="", cardCite, cardImg, cardImgText, cardText } : CardProps ) : JSX.Element {
    return (<div className={ className }>
        <div className="w-fit h-auto p-4 rounded-[50%] shadow-[8px_8px_16px_#c7c8ca,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#1a2330,-8px_-8px_16px_#232f42]">
            <img className="w-[40px] h-auto rounded-[50%] md:w-[64px]" src={ cardImg } alt={ cardImgText } />
        </div>
        <blockquote className="w-full h-auto lg:w-[60%]">
            <p className="text-center text-sm italic lg:text-start">{ cardText }</p>
            <cite className="text-sm text-gray-400 lg:text-start">{ cardCite }</cite>
        </blockquote>
    </div>);
}
