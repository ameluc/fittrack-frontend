import { useEffect, useState, type JSX } from "react";
import { Outlet } from "react-router";
import SectionFooter from "./components/SectionFooter";
import SectionNavBar from "./components/SectionNavBar";
// import AOS from "aos";
// import "aos/dist/aos.css";


export default function App() : JSX.Element {
    const [ isLGView, setIsLGView ] = useState<boolean>(window.innerWidth >= 1024);
    useEffect(() => {
        function handleScreenSize() : void {
            setIsLGView(window.innerWidth >= 1024);
        }
        window.addEventListener("resize", handleScreenSize);
        return () => { window.removeEventListener("resize", handleScreenSize) };
    });

    return (<>
        <SectionNavBar className={ isLGView ? "" : "sticky top-0 z-1 w-full h-auto px-4 pt-4 pb-10 bg-gray-100 dark:bg-gray-800 flex items-center justify-center lg:fixed lg:top-24 lg:left-8"} />
        { isLGView && <div className="w-[2px] h-[80vh] top-[10vh] left-70 fixed bg-gray-200"/> }
        <Outlet />
        <SectionFooter className="w-full h-auto
            px-6
            py-12
            flex
            flex-col
            items-center
            justify-center
            text-sm" />
    </>);
}
