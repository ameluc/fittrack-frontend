import FeatureCard from "../components/FeatureCard";
import PricingCard from "../components/PricingCard";
import TestimonialCard from "../components/TestimonialCard";
import appStoreButton from "../assets/button-app-store.png"
import playStoreButton from "../assets/button-play-store.png";
import { useState, useEffect } from "react";


function HomePage()
{
    const [ isTabPlus, setIsTabPlus ] = useState(window.innerWidth >= 768);
    const [ isLapPlus, setIsLapPlus ] = useState(window.innerWidth >= 768);

    function handleScreenSize()
    {
        setIsTabPlus(window.innerWidth >= 768);
        setIsLapPlus(window.innerWidth >= 1024);
    }

    useEffect(() => {
        window.addEventListener("resize", handleScreenSize);

        return () => { window.removeEventListener("resize", handleScreenSize) };
    });

    return (<>
        <section id="hero" className="w-full h-auto
            mx-auto
            px-6
            pt-12
            pb-36
            flex
            flex-col-reverse
            items-center
            justify-center
            gap-4
            md:gap-8
            lg:px-40
            lg:focus:outline-none
            lg:focus:ring-
            lg:focus:ring-
            lg:flex-row
            transition
            lg:dark:focus:ring-">
            <div className="w-full h-auto
                flex
                flex-col
                items-center
                justify-center
                text-center
                md:w-[80%]
                lg:mx-
                lg:px-">
                <div className="pb-4">
                    <h1 className="
                        font-bold
                        text-[28px]
                        text-[#111827]
                        dark:text-gray-100
                        md:text-4xl
                        lg:text-5xl">Track your progress,
                    </h1>
                    <h1 className="
                        font-bold
                        text-[28px]
                        text-[#111827]
                        dark:text-gray-100
                        md:text-4xl
                        lg:text-5xl">reach your goals
                    </h1>
                </div>
                <p className="w-[75%]
                    pb-8
                    text-base
                    text-[#6B7280]
                    dark:text-gray-100
                    lg:text-lg">An intuitive fitness tracking app that helps you monitor workouts, nutrition, and overall wellness.
                </p>
                <a className="
                    px-6
                    py-3
                    border-2
                    border-emerald-400
                    rounded-xl
                    bg-[#10b981]
                    shadow-md
                    shadow-teal-400/50
                    font-semibold
                    text-
                    text-gray-100
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-400
                    md:border-2
                    md:rounded-2xl
                    md:text
                    lg:cursor-pointer
                    lg:border-2
                    lg:rounded-2xl
                    lg:text-
                    transition
                    lg:delay-100
                    lg:duration-200
                    lg:ease-in-out
                    lg:hover:scale-110" href="#download">Get Started
                </a>
            </div>
            <img className="w-[85%] h-auto
                    rounded-2xl
                    bg-
                    shadow
                    focus:outline-none
                    focus:ring-
                    focus:ring-
                    overflow-hidden
                    dark:bg-
                    dark:shadow
                    dark:focus:ring-
                    md:rounded-3xl
                    lg:w-[36%]
                    lg:rounded-4xl"
                src="https://placehold.co/400x700?text=App+Mockup"
                alt="App mockup showing dashboard" />
        </section>
        <div className="w-[90%] h-[1px] mx-auto bg-gray-300" />
        <section id="features" className="w-full h-auto
            mx-auto
            px-6
            py-36
            flex
            flex-col
            items-center
            justify-center
            lg:py-40">
            <h2 className="w-full h-auto
                py-8
                text-center
                font-semibold
                text-2xl
                lg:text-center
                lg:text-3xl">Why FitTrack?
            </h2>
            <div className="flex flex-col lg:px-32 lg:flex-row">
                <FeatureCard
                    className="w-full
                        px-8
                        py-8
                        flex
                        flex-col
                        items-center
                        justify-center
                        md:flex-row
                        lg:flex-col"
                    featureImg="https://placehold.co/200x200?text=Workout"
                    featureImgText="Workout tracking illustration"
                    featureText="Log your exercises, sets, and reps with ease."
                    featureTitle="Workout Tracking"
                    reverse={ true } />
                <FeatureCard
                    className="w-full
                        px-8
                        py-8
                        flex
                        flex-col
                        items-center
                        justify-center
                        md:flex-row
                        lg:flex-col"
                    featureImg="https://placehold.co/200x200?text=Nutrition"
                    featureImgText="Nutrition tracking illustration"
                    featureText="Track your calories and macros to stay on target."
                    featureTitle="Nutrition Monitoring"
                    reverse={ isTabPlus ? false : true } />
                <FeatureCard
                    className="w-full
                        px-8
                        py-8
                        flex
                        flex-col
                        items-center
                        justify-center
                        md:flex-row
                        lg:flex-col"
                    featureImg="https://placehold.co/200x200?text=Progress"
                    featureImgText="Progress chart illustration"
                    featureText="Visualize your journey with charts and statistics."
                    featureTitle="Progress Insights"
                    reverse={ true } />
            </div>
        </section>
        <div className="w-[90%] h-[1px] mx-auto bg-gray-300" />
        <section id="testimonials" className="w-full h-auto
            mx-auto
            px-6
            py-36
            flex
            flex-col
            items-center
            justify-center
            md:items-start
            lg:py-40">
            <h2 className="w-full h-auto
                py-8
                text-center
                font-semibold
                text-2xl
                lg:text-center
                lg:text-3xl">What Our Users Say
            </h2>
            <div className="w-full h-auto flex flex-col items-center justify-center lg:flex-row">
                <TestimonialCard
                    className="w-full h-auto
                        py-4
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-2
                        md:pl-20
                        md:flex-row
                        md:gap-4
                        lg:pl-0"
                    testimonialCite="- Alex, 28"
                    testimonialImg="https://placehold.co/100x100?text=User+1"
                    testimonialImgText="User photo"
                    testimonialText="FitTrack completely changed how I manage my workouts. Highly recommend!" />
                    { isLapPlus && <div className="w-[1px] h-[120px] mx-2 bg-gray-300" /> }
                <TestimonialCard
                    className="w-full h-auto
                        py-4
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-2
                        md:pl-20
                        md:flex-row
                        md:gap-4
                        lg:pl-0"
                    testimonialCite="- Maria, 34"
                    testimonialImg="https://placehold.co/100x100?text=User+2"
                    testimonialImgText="User photo"
                    testimonialText="Finally an app that keeps me consistent. Simple and powerful." />
            </div>
        </section>
        <div className="w-[90%] h-[1px] mx-auto bg-gray-300" />
        <section id="pricing" className="w-full h-auto
            mx-auto
            px-6
            py-36
            flex
            flex-col
            items-center
            justify-center
            md:items-end
            lg:py-40">
            <h2 className="w-full h-auto
                py-8
                text-center
                font-semibold
                text-2xl
                lg:text-center
                lg:text-3xl">Choose Your Plan
            </h2>
            <div className="w-full h-auto mx-auto flex flex-col md:px-8 md:flex-row md:gap-3">
                <PricingCard
                    className="w-full h-auto py-4 flex flex-row items-center justify-end md:w-[70%] md:px-5 md:flex-col-reverse"
                    pricingImg="https://placehold.co/150x150?text=Free"
                    pricingImgText="Free plan icon"
                    pricingText="Basic tracking features, unlimited workouts."
                    pricingTitle="Free" />
                <PricingCard
                    className="w-full h-auto py-4 flex flex-row items-center justify-end md:w-[70%] md:px-5 md:flex-col-reverse"
                    pricingImg="https://placehold.co/150x150?text=Pro"
                    pricingImgText="Pro plan icon"
                    pricingText="Advanced analytics, nutrition tracking, and personalized insights."
                    pricingTitle="Pro" />
            </div>
        </section>
        <div className="w-[90%] h-[1px] mx-auto bg-gray-300" />
        <section id="download" className="w-full h-auto
            mx-auto
            px-6
            py-36
            flex
            flex-col
            items-center
            justify-center
            lg:py-40">
                <h2 className="w-full h-auto
                    py-8
                    text-center
                    font-semibold
                    text-2xl
                    lg:text-center
                    lg:text-3xl">Start your fitness journey today
                </h2>
                <div className="w-fit h-auto mx-auto my-4 flex flex-row items-center justify-center gap-2">
                    <a className="
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-blue-400
                            lg:cursor-pointer
                            transition
                            lg:delay-100
                            lg:duration-200
                            lg:ease-in-out
                            lg:hover:scale-105"
                        href="#"
                        target="blank">
                        <img className="w-auto h-10 md:h" src={ appStoreButton } alt="app store button" />
                    </a>
                    <a className="
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-blue-400
                            lg:cursor-pointer
                            transition
                            lg:delay-100
                            lg:duration-200
                            lg:ease-in-out
                            lg:hover:scale-105"
                        href="#"
                        target="blank">
                        <img className="w-auto h-10 md:h" src={ playStoreButton } alt="play store button" />
                    </a>
                </div>
                <img className="w-80 h-auto
                        rounded-xl
                        md:w-100
                        md:rounded-2xl
                        lg:rounded-3xl"
                    src="https://placehold.co/400x400?text=Download"
                    alt="Download app mockup" />
        </section>
    </>);
}

export default HomePage;
