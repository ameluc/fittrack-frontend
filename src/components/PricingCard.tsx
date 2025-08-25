interface PricingProps
{
    className?: string,
    pricingImg: string,
    pricingImgText: string,
    pricingText: string,
    pricingTitle: string
};

function PricingCard({ className="", pricingImg, pricingImgText,  pricingText, pricingTitle } : PricingProps)
{
    return (<div className={ className }>
        <div className="w-full h-auto pr-3 flex flex-col gap-2 md:px-0 md:py-4 md:w-[80%]">
            <h3 className="text-end font-medium text-xl text-[#1e3a8a] dark:text-[#84f3d0]">{ pricingTitle }</h3>
            <p className="text-end">{ pricingText }</p>
        </div>
        <div className="w-[2px] h-[80px] mx-auto bg-teal-300 md:w-[80%] md:h-[2px]" />
        <div className="w-fit h-auto pl-3 md:px-0 md:py-8">
            <img className="w-[160px] h-auto rounded-xl md:w-[200px] lg:w-[240px]" src={ pricingImg } alt={ pricingImgText } />
        </div>
    </div>);
}

export default PricingCard;
