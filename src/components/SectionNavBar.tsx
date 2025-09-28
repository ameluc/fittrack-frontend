import { useEffect, useState, type JSX } from "react";
import { Link } from "react-router";
import { setUiMode } from "../../utilitaries";
import Button from "./Button";
import { IconDownload, IconFeature, IconLogin, IconPricing, IconTestimonial, IconUiDark, IconUiBright } from "../assets/Icons.tsx";
import Helper from "./Helper.tsx";


interface SectionProps {
    className?: string,
    navBarText?: string
};

export default function SectionNavBar({ className="" } : SectionProps) : JSX.Element {
    const [ isMDView, setIsMDView ] = useState<boolean>(window.innerWidth >= 768);
    const [ theme, setTheme ] = useState<string>(() => localStorage.getItem("theme") ?? "light");
    const themeIcon = theme === "dark" ? <IconUiBright width="32" height="32" /> : <IconUiDark width="32" height="32" />
    const styles = {
        "action":"w-fit h-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 lg:cursor-pointer lg:p-2 lg:rounded-xl transition lg:delay-100 lg:duration-200 lg:ease-in-out lg:active:scale-90 lg:hover:scale-110 lg:hover:bg-gray-200 lg:dark:hover:bg-sky-900",
        "div": "h-auto mx-auto py-4 flex flex-row items-center lg:flex-col",
        "link": "w-fit h-auto flex flex-row items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 lg:cursor-pointer lg:p-2 lg:rounded-xl transition lg:delay-100 lg:duration-200 lg:ease-in-out lg:active:scale-90 lg:hover:scale-110 lg:hover:bg-gray-200 lg:dark:hover:bg-sky-900",
        "download": theme === "dark" ? "text-teal-400" : "text-sky-600"
    }
    useEffect(() => { setUiMode(theme); }, [theme]);
    useEffect(() => {
        function handleScreenSize() : void  {
            setIsMDView(window.innerWidth > 768);
        }

        window.addEventListener("resize", handleScreenSize);
        return () => { window.removeEventListener("resize", handleScreenSize) };
    });

    return (<nav className={ className }>
        <div className="w-fit h-auto rounded-3xl px-4 pt-4 shadow-[8px_8px_16px_#c7c8ca,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#1a2330,-8px_-8px_16px_#232f42] flex flex-col items-center justify-center lg:fixed lg:top-1/2 lg:-translate-y-1/2 lg:left-8">
            <div className={ styles.div + " w-full justify-between"}>
                <Link className="italic text-4xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" aria-label="link to home page" to="/">FitTrack</Link>
                <div className="w-fit h-auto flex flex-row items-center justify-center gap-2">
                    <Link className={ styles.action } aria-label="link to login page" to="/login">
                        <IconLogin width="32" height="32" />
                    </Link>
                    <Helper className="w-[1px] h-[40px] bg-gray-200 dark:bg-gray-600" />
                    <Button className={ styles.action } buttonType="button" buttonIcon={ themeIcon } onClick={() => { setTheme(theme === "dark" ? "light" : "dark") }} />
                </div>
            </div>
            <Helper className="w-[100%] h-[1px] bg-teal-200 dark:bg-teal-600" />
            <div className={ styles.div + " w-fit px-4 justify-center gap-8" }>
                <a className={ styles.link } aria-label="link to features" href="#features">
                    <IconFeature width="32" height="32" />
                    { isMDView && <p>Features</p> }
                </a>
                <a className={ styles.link } aria-label="link to testimonials" href="#testimonials">
                    <IconTestimonial width="32" height="32" />
                    { isMDView && <p>Testimonials</p> }
                </a>
                <a className={ styles.link } aria-label="link to pricing" href="#pricing">
                    <IconPricing width="32" height="32" />
                    { isMDView && <p>Pricing</p> }
                </a>
                <a className={ styles.link } aria-label="link to download" href="#download">
                    <IconDownload className={ styles.download } width="32" height="32" />
                    { isMDView && <p className={ styles.download }>Download</p> }
                </a>
            </div>
        </div>
    </nav>);
}
