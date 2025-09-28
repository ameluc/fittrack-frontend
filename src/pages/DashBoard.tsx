import { useEffect, useRef, useState, type JSX } from "react";
import Button from "../components/Button";


export default function Dashboard() : JSX.Element {
    // const [ isMDView, setIsMDView ] = useState<boolean>(window.innerWidth >= 768);
    const [ isLGView, setIsLGView ] = useState<boolean>(window.innerWidth >= 1024);
    const [ isSticky, setIsSticky ] = useState<boolean>(false);
    const refTitleContainer = useRef<HTMLElement>(null);
    const userDataStyles = {
        "section": "w-full h-auto rounded-3xl p-4 flex flex-col items-center justify-center gap-4 overflow-y-auto shadow-[8px_8px_16px_#c7c8ca,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#1a2330,-8px_-8px_16px_#232f42]",
        "h2": "text-lg md:text-2xl lg:text-3xl",
        "div": "w-full h-auto max-h-[50vh] rounded-lg p-2 flex flex-col items-center justify-center shadow-[inset_8px_8px_16px_#c7c8ca,inset_-8px_-8px_16px_#ffffff] dark:shadow-[inset_8px_8px_16px_#1a2330,inset_-8px_-8px_16px_#232f42]"
    };
    const userSettingsStyles = {
        "section": "lg:fixed lg:right-8 w-full lg:w-fit h-auto rounded-3xl p-4 flex flex-col items-center justify-center gap-4 shadow-[8px_8px_16px_#c7c8ca,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#1a2330,-8px_-8px_16px_#232f42]",
        "button": "w-full h-auto lg:border-2 rounded-lg lg:border-blue-400/0 lg:px-12 py-2 flex flex-col items-center justify-center shadow-[8px_8px_16px_#c7c8ca,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#1a2330,-8px_-8px_16px_#232f42] lg:hover:cursor-pointer",
    };
    const headerStyles = {
        "sticky": "sticky top-52 px-6 w-full h-auto bg-gray-100 dark:bg-gray-800 shadow-[8px_8px_16px_#c7c8ca] dark:shadow-[8px_8px_16px_#1a2330] flex flex-col md:flex-row items-center justify-center md:gap-2",
        "notSticky": "relative px-6 lg:px-20 w-full h-auto flex flex-col md:flex-row items-center justify-center md:gap-2"
    }
    useEffect(() => {
        function handleScroll() {
            const element = refTitleContainer.current;
            if (!element) return;
            if (!isLGView) setIsSticky(element.getBoundingClientRect().top <= 208);
        }
        window.addEventListener("scroll", handleScroll);
        return () => { window.removeEventListener("scroll", handleScroll) };
    });
    useEffect(() => {
        function handleScreenSize() {
            setIsLGView(window.innerWidth >= 1024);
            // setIsMDView(window.innerWidth >= 768);
        }
        window.addEventListener("resize", handleScreenSize);
        return () => { window.removeEventListener("resize", handleScreenSize) };
    });

    return (<div className="w-full h-auto flex flex-col lg:flex-row">
        { isLGView && <div className="w-full lg:w-[25%] h-[100vh] lg:h-[100vh]" /> }
        <div className="w-full h-auto flex flex-col items-center justify-center gap-10">
            <header className={ isSticky ? headerStyles.sticky : headerStyles.notSticky } ref={ refTitleContainer }>
                <h1 className="text-2xl md:text-4xl lg:text-5xl">It's good to see you,</h1>
                <h1 className="text-2xl md:text-4xl lg:text-5xl">[UserName]!</h1>
            </header>
            { !isSticky && <div className="w-[80%] h-[1px] bg-gray-200" /> }
            <main className="w-full h-auto px-6 lg:px-20 flex md:grid flex-col lg:grid-cols-3 items-center justify-center gap-12">
                <div className="lg:col-span-2 w-full h-auto flex flex-col items-center justify center gap-12 lg:gap-20">
                    <section className={ userDataStyles.section }>
                        <h2 className={ userDataStyles.h2 }>Daily Activity</h2>
                        <div className={ userDataStyles.div }>
                            [ Chart placeholder ]
                        </div>
                    </section>
                    <section className={ userDataStyles.section }>
                        <h2 className={ userDataStyles.h2 }>Progress Overview</h2>
                        <div className={ userDataStyles.div }>
                            [ Stats placeholder ]
                        </div>
                    </section>
                </div>
                <section className={ userSettingsStyles.section }>
                    <h2 className="text-base md:text-lg lg:text-xl">Profile & Settings</h2>
                    <div className="w-full lg:w-fit h-auto flex flex-col items-center justify-center gap-8">
                        <Button className={ userSettingsStyles.button + "lg:hover:border-blue-400" } buttonType="button" buttonText="Profile" />
                        <Button className={ userSettingsStyles.button + "lg:hover:border-yellow-400" } buttonType="button" buttonText="Settings" />
                    </div>
                </section>
            </main>
        </div>
    </div>);
}
