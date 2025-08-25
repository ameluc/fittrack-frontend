interface TestimonialProps
{
    className?: string,
    testimonialCite: string,
    testimonialImg: string,
    testimonialImgText: string,
    testimonialText: string
};

function TestimonialCard({
    className="",
    testimonialCite,
    testimonialImg,
    testimonialImgText,
    testimonialText } : TestimonialProps)
{
    return (<div className={ className }>
        <img className="w-[80px] h-auto rounded-[100%] md:w-[64px] lg:w-[92px]" src={ testimonialImg } alt={ testimonialImgText } />
        <blockquote className="w-full h-auto lg:w-[60%]">
            <p className="text-center text-sm italic lg:text-start">{ testimonialText }</p>
            <cite className="text-sm text-gray-400 lg:text-start">{ testimonialCite }</cite>
        </blockquote>
    </div>);
}

export default TestimonialCard;
