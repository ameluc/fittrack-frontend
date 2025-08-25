// import { Link } from "react-router";
import { useEffect, useState } from "react";
import Button from "./Button";
import DarkModeIcon from "../assets/DarkModeIcon";
import DownloadIcon from "../assets/DownloadIcon";
import FeatureIcon from "../assets/FeatureIcon";
import LightModeIcon from "../assets/LightModeIcon";
import PricingIcon from "../assets/PricingIcon";
import TestiIcon from "../assets/TestiIcon";

interface NavBarProps
{
    className?: string,
    navBarText?: string
};

function setMode(mode: string)
{
    if (mode === "dark")
    {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
    }
    else if (mode === "light")
    {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
    }
    else
    {
        localStorage.removeItem("theme");
    }
}

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
            <a className="ml-4 text-4xl italic lg:ml-4" href="#">FitTrack</a>
            <Button className="
                w-fit
                h-auto
                mr-4
                lg:cursor-pointer
                lg:mr-8
                lg:p-2
                lg:rounded-xl
                lg:text-
                transition
                lg:delay-100
                lg:duration-200
                lg:ease-in-out
                lg:active:scale-90
                lg:hover:scale-110
                lg:hover:bg-gray-100
                lg:dark:hover:bg-sky-900"
                buttonType="button"
                buttonIcon={ theme === "dark" ?
                    <LightModeIcon color1="#f3f4f6" color2="#f3f4f6" width="32" height="32" /> :
                    <DarkModeIcon color="#1e2939" width="32" height="32" />
                }
                onClick={() => { setTheme(theme === "dark" ? "light" : "dark")}} /></div>
        <div className="w-[100%] h-[1px] mx-auto bg-teal-300" />
        <div className="w-fit h-auto mx-auto px-4 py-4 flex flex-row gap-8">
            <a className="w-fit h-auto flex flex-row items-center justify-center gap-2
                lg:cursor-pointer
                lg:p-2
                lg:rounded-xl
                lg:text-
                transition
                lg:delay-100
                lg:duration-200
                lg:ease-in-out
                lg:active:scale-90
                lg:hover:scale-110
                lg:hover:bg-gray-100
                lg:dark:hover:bg-sky-900" href="#features">
                <FeatureIcon
                    color={ theme === "dark" ? "#f3f4f6" : "#1e2939" }
                    width="32"
                    height="32" />
                { isScreenBig && <p>Features</p> }
            </a>
            <a className="w-fit h-auto flex flex-row items-center justify-center gap-2
                lg:cursor-pointer
                lg:p-2
                lg:rounded-xl
                lg:text-
                transition
                lg:delay-100
                lg:duration-200
                lg:ease-in-out
                lg:active:scale-90
                lg:hover:scale-110
                lg:hover:bg-gray-100
                lg:dark:hover:bg-sky-900" href="#testimonials">
                <TestiIcon
                    color={ theme === "dark" ? "#f3f4f6" : "#1e2939" }
                    width="32"
                    height="32" />
                { isScreenBig && <p>Testimonials</p> }
            </a>
            <a className="w-fit h-auto flex flex-row items-center justify-center gap-2
                lg:cursor-pointer
                lg:p-2
                lg:rounded-xl
                lg:text-
                transition
                lg:delay-100
                lg:duration-200
                lg:ease-in-out
                lg:active:scale-90
                lg:hover:scale-110
                lg:hover:bg-gray-100
                lg:dark:hover:bg-sky-900" href="#pricing">
                <PricingIcon
                    color={ theme === "dark" ? "#f3f4f6" : "#1e2939" }
                    width="32"
                    height="32" />
                { isScreenBig && <p>Pricing</p> }
            </a>
            <a className="w-fit h-auto flex flex-row items-center justify-center gap-2
                lg:cursor-pointer
                lg:p-2
                lg:rounded-xl
                lg:text-
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
            {/* { isScreenBig &&  <div className="w-[1px] h-8 mx-4 border-x border-x-teal-500"></div> } */}
        </div>
    </nav>);
}

export default NavBar;






















    // return (<div className={ className }>
    //     <Link to="" aria-label="">
    //     </Link>
    // </div>);
