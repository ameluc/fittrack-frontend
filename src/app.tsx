import type { JSX } from "react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import SectionNavBar from "./components/sections/nav-bar";
import SectionFooter from "./components/sections/footer";


export default function App() : JSX.Element {
    const [ isLGView, setIsLGView ] = useState<boolean>(window.innerWidth >= 1024);
    const styles : Record<string, string> = {
        "footer": "w-full h-auto px-6 py-12 flex flex-col items-center justify-center text-sm",
        "header": isLGView ? "" : "z-11 sticky top-0 w-full h-auto px-4 pt-4 pb-10 bg-gray-100 dark:bg-gray-800 flex items-center justify-center lg:fixed lg:top-24 lg:left-8",
        "link": "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
    };
    const footerLinks = [
        { href: "#", text: "Privacy Policy" },
        { href: "#", text: "Terms of Service" }
    ]

    useEffect(() => {
        function handleView() : void {
            setIsLGView(window.innerWidth >= 1024);
        }

        window.addEventListener("resize", handleView);

        return () => { window.removeEventListener("resize", handleView) };
    });

    return (<>
        <header className={ styles.header }>
            <SectionNavBar />
        </header>
        <main>
            <Outlet />
        </main>
        <SectionFooter className={ styles.footer } sectionImgSrc="https://placehold.co/100x50?text=FitTrack+Logo" sectionText="&copy; 2025 FitTrack. All rights reserved." sectionLinks={ footerLinks } />
    </>);
}
