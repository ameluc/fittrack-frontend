import type { JSX } from "react";
import type { CardProps } from "../type";


export default function CardPricing( { className="", cardImg, cardImgText,  cardText, cardTitle } : CardProps ) : JSX.Element {
    return (<div className={ className }>
        <div className="w-full h-auto pr-3 flex flex-col gap-2 md:px-0 md:py-4 md:w-[80%]">
            <h3 className="text-end font-medium text-xl text-[#1e3a8a] dark:text-[#84f3d0]">{ cardTitle }</h3>
            <p className="text-end">{ cardText }</p>
        </div>
        <div className="w-[1px] h-[80px] mx-auto bg-teal-300 md:w-[100%] md:h-[1px]" />
        <div
            className="w-fit h-auto
                p-8
                rounded-[20px]
                shadow-[inset_8px_8px_16px_#c7c8ca,inset_-8px_-8px_16px_#ffffff]
                dark:shadow-[inset_8px_8px_16px_#1a2330,inset_-8px_-8px_16px_#232f42]
                md:mb-6
                lg:rounded-[48px]">
            <img className="w-[160px] h-auto rounded-2xl md:w-[200px] lg:w-[240px] lg:rounded-3xl" src={ cardImg } alt={ cardImgText } />
        </div>
    </div>);
}
