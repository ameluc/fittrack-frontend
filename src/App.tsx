import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Footer from "./components/SectionFooter";
import NavBar from "./components/NavBar";
// import AOS from "aos";
// import "aos/dist/aos.css";


export default function App()
{
    const [ isScreenBig, setIsScreenBig ] = useState(window.innerWidth > 1024);

    function handleScreenSize()
    {
        setIsScreenBig(window.innerWidth > 1024);
    }

    // useEffect(()=>
    // {
    //     AOS.init({
    //         duration: 1000,
    //         once: true,
    //         mirror: false
    //     });
    // });

    useEffect(() => {
        window.addEventListener("resize", handleScreenSize);

        return () => { window.removeEventListener("resize", handleScreenSize) };
    });

    return (<>
        <NavBar className="
            sticky
            top-4
            z-1
            w-fit
            h-auto
            mx-auto
            px-4
            rounded-3xl
            shadow-[8px_8px_16px_#c7c8ca,-8px_-8px_16px_#ffffff]
            dark:shadow-[8px_8px_16px_#1a2330,-8px_-8px_16px_#232f42]
            flex
            flex-col
            items-center
            justify-center
            lg:fixed
            lg:top-24
            lg:left-8" />
        { isScreenBig && <div className="w-[2px] h-[80vh] top-[10vh] left-70 fixed bg-gray-200"/> }
        <Outlet />
        <Footer className="
            w-full
            h-auto
            py-12
            flex
            flex-col
            items-center
            justify-center
            text-sm" />
    </>);
}
