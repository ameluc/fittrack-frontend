interface FeatureProps
{
    className?: string,
    featureImg: string,
    featureImgText: string,
    featureText: string,
    featureTitle: string,
    reverse: boolean
};

function FeatureCard({
    className="",
    featureImg,
    featureImgText,
    featureText,
    featureTitle,
    reverse=false } : FeatureProps)
{
    if (reverse)
    {
        return (<div className={ className }>
            <div className="w-full px-6 py-4">
                <img className="w-full h-auto rounded-2xl shadow-md" src={ featureImg } alt={ featureImgText } />
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
            <div className="w-full px-6 py-4">
                <img className="w-full h-auto rounded-2xl shadow-md" src={ featureImg } alt={ featureImgText } />
            </div>
        </div>);
    }
}

export default FeatureCard;
