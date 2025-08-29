interface CardProps
{
    className?: string,
    featureImg: string,
    featureImgText: string,
    featureText: string,
    featureTitle: string,
    reverse: boolean
};


export default function CardFeature({ className="", featureImg, featureImgText, featureText, featureTitle, reverse=false } : CardProps)
{
    if (reverse)
    {
        return (<div className={ className }>
            <div className="w-full h-auto
                p-4
                rounded-4xl
                shadow-[8px_8px_16px_#c7c8ca,-8px_-8px_16px_#ffffff]
                dark:shadow-[8px_8px_16px_#1a2330,-8px_-8px_16px_#232f42]">
                <img className="w-full h-auto rounded-2xl" src={ featureImg } alt={ featureImgText } />
            </div>
            <div className="px-4 flex flex-col items-center justify-center md:items-start lg:items-center">
                <h3 className="py-2 font-medium text-xl text-[#1e3a8a] dark:text-[#84f3d0]">{ featureTitle }</h3>
                <p className="text-center md:text-start lg:text-center">{ featureText }</p>
            </div>
        </div>);
    }
    else
    {
        return (<div className={ className }>
            <div className="px-4 flex flex-col items-center justify-center md:items-end lg:items-center">
                <h3 className="py-2 font-medium text-xl text-[#1e3a8a] dark:text-[#84f3d0]">{ featureTitle }</h3>
                <p className="text-center md:text-end lg:text-center">{ featureText }</p>
            </div>
            <div className="w-full h-auto
                p-4
                rounded-4xl
                shadow-[8px_8px_16px_#c7c8ca,-8px_-8px_16px_#ffffff]
                dark:shadow-[8px_8px_16px_#1a2330,-8px_-8px_16px_#232f42]">
                <img className="w-full h-auto rounded-2xl" src={ featureImg } alt={ featureImgText } />
            </div>
        </div>);
    }
}
