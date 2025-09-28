import { useState, useEffect, type JSX } from "react";
import buttonAppStore from "../assets/button-app-store.png"
import buttonPlayStore from "../assets/button-play-store.png";
import CardFeature from "../components/CardFeature";
import CardPricing from "../components/CardPricing";
import CardTestimonial from "../components/CardTestimonial";
import Helper from "../components/Helper";


export default function Home() : JSX.Element {
    const [ isMDView, setIsMDView ] = useState<boolean>(window.innerWidth >= 768);
    const [ isLGView, setIsLGView ] = useState<boolean>(window.innerWidth >= 1024);
    const sectionStyle: string = isLGView ? "w-full h-fit flex flex-row" : "w-full h-fit";
    const cardStyle: Record<string, string> = {
        "feature": "w-full h-fit rounded-[64px] p-8 shadow-[inset_8px_8px_16px_#c7c8ca,inset_-8px_-8px_16px_#ffffff] dark:shadow-[inset_8px_8px_16px_#1a2330,inset_-8px_-8px_16px_#232f42] flex flex-col items-center justify-center gap-8 md:flex-row lg:flex-col",
        "pricing": "w-full h-fit flex flex-row items-center justify-end md:w-[50%] md:flex-col-reverse",
        "testimonial": "w-full h-fit flex flex-col items-center justify-center gap-2 md:pl-20 md:flex-row md:gap-8 lg:pl-0"
    };
    const helperStyle: Record<string, string> = {
        "divider": "w-[70vw] h-[1px] mx-auto my-40 bg-gray-200 dark:bg-gray-600",
        "spacer" : "w-[25%] h-[100vh]"
    };
    const linkStyle: Record<string, string> = {
        "cta": "w-fit h-fit px-6 py-3 border rounded-xl border-teal-500 shadow-[8px_8px_16px_#c7c8ca,-8px_-8px_16px_#ffffff] font-semibold text- text-teal-500 dark:border-0 dark:text-gray-100 dark:shadow-[8px_8px_16px_#1a2330,-8px_-8px_16px_#232f42] md:rounded-2xl md:text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 lg:cursor-pointer lg:px-8 lg:py-4 lg:rounded-2xl lg:text-xl transition lg:delay-100 lg:duration-200 lg:ease-in-out lg:hover:scale-110",
        "store": "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 lg:cursor-pointer transition lg:delay-100 lg:duration-200 lg:ease-in-out lg:hover:scale-105",
    };
    const titleStyle: Record<string, string> = {
        "h1": "font-bold text-[28px] text-[#111827] dark:text-gray-100 md:text-4xl lg:text-5xl",
        "h2": "w-full h-fit py-12 text-center font-semibold text-2xl lg:text-center lg:text-3xl"
    };
    useEffect(() => {
        function handleScreenSize() : void {
            setIsMDView(window.innerWidth >= 768);
            setIsLGView(window.innerWidth >= 1024);
        }

        window.addEventListener("resize", handleScreenSize);
        return () => { window.removeEventListener("resize", handleScreenSize) };
    }, [ isMDView, isLGView ]);

    return (<>
        <section id="hero" className={ sectionStyle } data-aos="fade-up" data-aos-offset="100">
            { isLGView && <Helper className={ helperStyle.spacer } /> }
            <div className="w-full h-fit mx-auto pt-16 flex flex-col items-center justify-center" data-aos="zoom-in" data-aos-offset="100">
                <div className="w-full h-fit flex flex-col-reverse items-center justify-center lg:px-8 lg:flex-row lg:gap-8">
                    <div className="w-fit h-fit flex flex-col items-center justify-center text-center">
                        <div className="w-fit h-fit pb-4">
                            <h1 className={ titleStyle.h1 }>Track your progress,</h1>
                            <h1 className={ titleStyle.h1 }>reach your goals</h1>
                        </div>
                        <p className="pb-8 text-base text-[#6B7280] dark:text-gray-100 lg:w-[420px] lg:text-lg">
                            An intuitive fitness tracking app that helps you monitor workouts, nutrition, and overall wellness.
                        </p>
                        <a className={ linkStyle.cta } href="#download">Get Started</a>
                    </div>
                    <div className="w-fit h-fit p-4 rounded-2xl shadow-[8px_8px_16px_#c7c8ca,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#1a2330,-8px_-8px_16px_#232f42] md:rounded-3xl lg:rounded-4xl">
                        <img className="w-[320px] h-auto rounded-[8px] md:rounded-[16px] lg:rounded-[24px]" src="https://placehold.co/400x700?text=App+Mockup" alt="App mockup showing dashboard" />
                    </div>
                </div>
                <Helper className={ helperStyle.divider } />
            </div>
        </section>
        <section id="features" className={ sectionStyle } data-aos="fade-up" data-aos-offset="100">
            { isLGView && <Helper className={ helperStyle.spacer } /> }
            <div className="w-full h-fit mx-auto flex flex-col items-center justify-center" data-aos="zoom-in" data-aos-offset="100">
                <h2 className={ titleStyle.h2 }>Why FitTrack?</h2>
                <div className="flex flex-col gap-4 lg:px-8 lg:flex-row lg:gap-8">
                    <CardFeature className={ cardStyle.feature } featureImg="https://placehold.co/200x200?text=Workout" featureImgText="Workout tracking illustration" featureText="Log your exercises, sets, and reps with ease." featureTitle="Workout Tracking" reverse={ true } />
                    <CardFeature className={ cardStyle.feature } featureImg="https://placehold.co/200x200?text=Nutrition" featureImgText="Nutrition tracking illustration" featureText="Track your calories and macros to stay on target." featureTitle="Nutrition Monitoring" reverse={ isMDView ? false : true } />
                    <CardFeature className={ cardStyle.feature } featureImg="https://placehold.co/200x200?text=Progress" featureImgText="Progress chart illustration" featureText="Visualize your journey with charts and statistics." featureTitle="Progress Insights" reverse={ true } />
                </div>
                <Helper className={ helperStyle.divider } />
            </div>
        </section>
        <section id="testimonials" className={ sectionStyle } data-aos="fade-up" data-aos-offset="100">
            { isLGView && <Helper className={ helperStyle.spacer } /> }
            <div className="w-full h-fit mx-auto flex flex-col items-center justify-center" data-aos="zoom-in" data-aos-offset="100">
                <h2 className={ titleStyle.h2 }>What Our Users Say</h2>
                <div className="w-full h-fit flex flex-col items-center justify-center">
                    <CardTestimonial className={ cardStyle.testimonial } testimonialCite="- Alex, 28" testimonialImg="https://placehold.co/100x100?text=User+1" testimonialImgText="User photo" testimonialText="FitTrack completely changed how I manage my workouts. Highly recommend!" />
                    <div className="w-[50%] h-[1px] mx-auto my-8 bg-gray-600" />
                    <CardTestimonial className={ cardStyle.testimonial } testimonialCite="- Maria, 34" testimonialImg="https://placehold.co/100x100?text=User+2" testimonialImgText="User photo" testimonialText="Finally an app that keeps me consistent. Simple and powerful." />
                </div>
                <Helper className={ helperStyle.divider } />
            </div>
        </section>
        <section id="pricing" className={ sectionStyle } data-aos="fade-up" data-aos-offset="100">
            { isLGView && <Helper className={ helperStyle.spacer } /> }
            <div className="w-full h-fit mx-auto flex flex-col items-center justify-center md:items-end" data-aos="zoom-in" data-aos-offset="100">
                <h2 className={ titleStyle.h2 }>Choose Your Plan</h2>
                <div className="w-fit h-fit mx-auto flex flex-col items-center justify-center md:flex-row md:gap-12">
                    <CardPricing className={ cardStyle.pricing } pricingImg="https://placehold.co/150x150?text=Free" pricingImgText="Free plan icon" pricingText="Basic tracking features, unlimited workouts." pricingTitle="Free" />
                    <CardPricing className={ cardStyle.pricing } pricingImg="https://placehold.co/150x150?text=Pro" pricingImgText="Pro plan icon" pricingText="Advanced analytics, nutrition tracking, and personalized insights." pricingTitle="Pro" />
                </div>
                <Helper className={ helperStyle.divider } />
            </div>
        </section>
        <section id="download" className={ sectionStyle } data-aos="fade-up" data-aos-offset="100">
            { isLGView && <div className={ helperStyle.spacer } /> }
            <div className="mx-auto flex flex-col items-center justify-center" data-aos="zoom-in" data-aos-offset="100">
                <h2 className={ titleStyle.h2 }>Start your fitness journey today</h2>
                <div className="w-fit h-auto mx-auto my-4 flex flex-row items-center justify-center gap-6">
                    <a className={ linkStyle.store } href="#" target="blank">
                        <img className="w-auto h-10 md:h" src={ buttonAppStore } alt="app store button" />
                    </a>
                    <a className={ linkStyle.store } href="#" target="blank">
                        <img className="w-auto h-10 md:h" src={ buttonPlayStore } alt="play store button" />
                    </a>
                </div>
                <div className="w-fit h-auto mt-4 p-6 rounded-3xl shadow-[8px_8px_16px_#c7c8ca,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#1a2330,-8px_-8px_16px_#232f42] md:rounded-[28px] lg:rounded-[36px]">
                    <img className="w-80 h-auto rounded-xl md:w-100 md:rounded-2xl lg:rounded-3xl" src="https://placehold.co/400x400?text=Download" alt="Download app mockup" />
                </div>
                <Helper className={ helperStyle.divider } />
            </div>
        </section>
    </>);
}
