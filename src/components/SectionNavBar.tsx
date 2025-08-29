import { useEffect, useState, type JSX } from "react";
import { Link } from "react-router";
import { setUiMode } from "../../utilitaries";
import Button from "./Button";
import { IconDownload, IconFeature, IconLogin, IconPricing, IconTestimonial, IconUiDark, IconUiLight } from "../assets/Icons.tsx";


interface SectionProps
{
    className?: string,
    navBarText?: string
};


export default function SectionNavBar({ className="" } : SectionProps) : JSX.Element
{
    const [ theme, setTheme ] = useState<string>(() => localStorage.getItem("theme") ?? "light");
    const [ isScreenBig, setIsScreenBig ] = useState<boolean>(window.innerWidth > 768);

    const linkStyles = `
        w-fit
        h-auto
        flex
        flex-row
        items-center
        justify-center
        gap-2
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-400
        lg:cursor-pointer
        lg:p-2
        lg:rounded-xl
        transition
        lg:delay-100
        lg:duration-200
        lg:ease-in-out
        lg:active:scale-90
        lg:hover:scale-110
        lg:hover:bg-gray-200
        lg:dark:hover:bg-sky-900
    `

    useEffect(() : void =>
    {
        setUiMode(theme);
    }, [theme]);

    useEffect(() : () => void =>
    {
        function handleScreenSize() : void
        {
            setIsScreenBig(window.innerWidth > 768);
        }

        window.addEventListener("resize", handleScreenSize);

        return () => { window.removeEventListener("resize", handleScreenSize) };
    });

    return (<nav className={ className }>
        <div className="w-full h-auto mx-auto py-4 flex flex-row items-center justify-between lg:flex-col">
            <Link className="ml-4
                    italic
                    text-4xl
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-400
                    lg:ml-4"
                aria-label="link to home page"
                to="/">
                FitTrack
            </Link>
            <div className="w-fit h-auto flex flex-row items-center justify-center gap-2">
                <Link className="w-full h-auto
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-blue-400
                        lg:cursor-pointer
                        lg:p-2
                        lg:rounded-xl
                        transition
                        lg:delay-100
                        lg:duration-200
                        lg:ease-in-out
                        lg:active:scale-90
                        lg:hover:scale-110
                        lg:hover:bg-gray-200
                        lg:dark:hover:bg-sky-900"
                    aria-label="link to login page"
                    to="/login">
                    <IconLogin width="32" height="32" />
                </Link>
                <div className="w-[1px] h-[40px] bg-gray-300" />
                <Button className="w-fit h-auto
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-400
                    lg:cursor-pointer
                    lg:mr-8
                    lg:p-2
                    lg:rounded-xl
                    transition
                    lg:delay-100
                    lg:duration-200
                    lg:ease-in-out
                    lg:active:scale-90
                    lg:hover:scale-110
                    lg:hover:bg-gray-200
                    lg:dark:hover:bg-sky-900"
                    buttonType="button"
                    buttonIcon={ theme === "dark" ? <IconUiLight width="32" height="32" /> : <IconUiDark width="32" height="32" /> }
                    onClick={ () => {setTheme(theme === "dark" ? "light" : "dark")} } />
            </div>
        </div>
        <div className="w-[100%] h-[1px] mx-auto rounded-[100%] bg-teal-300" />
        <div className="w-fit h-auto mx-auto px-4 py-4 flex flex-row items-center justify-center gap-8 lg:flex-col">
            <a className={ linkStyles } aria-label="link to features" href="#features">
                <IconFeature width="32" height="32" />
                { isScreenBig && <p>Features</p> }
            </a>
            <a className={ linkStyles } aria-label="link to testimonials" href="#testimonials">
                <IconTestimonial width="32" height="32" />
                { isScreenBig && <p>Testimonials</p> }
            </a>
            <a className={ linkStyles } aria-label="link to pricing" href="#pricing">
                <IconPricing width="32" height="32" />
                { isScreenBig && <p>Pricing</p> }
            </a>
            <a className={ linkStyles } aria-label="link to download" href="#download">
                <IconDownload className={ theme === "dark" ? "text-teal-400" : "text-sky-600" } width="32" height="32" />
                { isScreenBig && <p className={ theme === "dark" ? "text-teal-400" : "text-sky-600" }>Download</p> }
            </a>
        </div>
    </nav>);
}
