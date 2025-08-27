import { useEffect, useState } from "react";
import { Link } from "react-router";
import { setMode } from "../../utilitaries";
import Button from "./Button";
import DarkModeIcon from "../assets/DarkModeIcon";
import DownloadIcon from "../assets/DownloadIcon";
import FeatureIcon from "../assets/FeatureIcon";
import LightModeIcon from "../assets/LightModeIcon";
import PricingIcon from "../assets/PricingIcon";
import TestiIcon from "../assets/TestiIcon";
import LoginIcon from "../assets/LoginIcon";

interface NavBarProps
{
    className?: string,
    navBarText?: string
};


function NavBar({ className="" } : NavBarProps)
{
    const [ theme, setTheme ] = useState(localStorage.getItem("theme") ?? "light");
    const [ isScreenBig, setIsScreenBig ] = useState(window.innerWidth > 768);

    function handleTheme()
    {
        setMode(theme);
    }

    function handleScreenSize()
    {
        setIsScreenBig(window.innerWidth > 768);
    }

    useEffect(handleTheme, [theme]);
    useEffect(() => {
        window.addEventListener("resize", handleScreenSize);

        return () => { window.removeEventListener("resize", handleScreenSize) };
    });

    return (<nav className={ className }>
        <div className="w-full h-auto mx-auto py-4 flex flex-row items-center justify-between">
            <Link className="
                ml-4
                italic
                text-4xl
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-400
                lg:ml-4" to="/">FitTrack
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
                    lg:hover:bg-gray-100
                    lg:dark:hover:bg-sky-900" to="/login">
                    <LoginIcon width="32" height="32" />
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
                    lg:hover:bg-gray-100
                    lg:dark:hover:bg-sky-900"
                    buttonType="button"
                    buttonIcon={ theme === "dark" ? <LightModeIcon width="32" height="32" /> : <DarkModeIcon width="32" height="32" /> }
                    onClick={() => { setTheme(theme === "dark" ? "light" : "dark")}} />
            </div>
        </div>
        <div className="w-[100%] h-[1px] mx-auto rounded-[100%] bg-teal-300" />
        <div className="w-fit h-auto mx-auto px-4 py-4 flex flex-row gap-8">
            <a className="w-fit h-auto
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
                lg:hover:bg-gray-100
                lg:dark:hover:bg-sky-900" href="#features">
                <FeatureIcon width="32" height="32" />
                { isScreenBig && <p>Features</p> }
            </a>
            <a className="w-fit h-auto
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
                lg:hover:bg-gray-100
                lg:dark:hover:bg-sky-900" href="#testimonials">
                <TestiIcon width="32" height="32" />
                { isScreenBig && <p>Testimonials</p> }
            </a>
            <a className="w-fit h-auto
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
                lg:hover:bg-gray-100
                lg:dark:hover:bg-sky-900" href="#pricing">
                <PricingIcon width="32" height="32" />
                { isScreenBig && <p>Pricing</p> }
            </a>
            <a className="w-fit h-auto
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
                lg:hover:bg-gray-100
                lg:dark:hover:bg-sky-900" href="#download">
                <DownloadIcon
                    color={ theme === "dark" ? "#13f1a7" : "#10b981" }
                    width="32"
                    height="32" />
                { isScreenBig && <p className={ theme === "dark" ? "text-[#13f1a7]" : "text-[#10b981]" }>Download</p> }
            </a>
        </div>
    </nav>);
}

export default NavBar;
