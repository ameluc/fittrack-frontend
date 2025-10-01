import { useEffect, useState, type JSX } from "react";
import { Outlet } from "react-router";
import SectionNavBar from "./components/SectionNavBar";


export default function App() : JSX.Element {
    const [ isLGView, setIsLGView ] = useState<boolean>(window.innerWidth >= 1024);
    const styles = {
        "footer": "w-full h-auto px-6 py-12 flex flex-col items-center justify-center text-sm",
        "header": isLGView ? "" : "sticky top-0 z-1 w-full h-auto px-4 pt-4 pb-10 bg-gray-100 dark:bg-gray-800 flex items-center justify-center lg:fixed lg:top-24 lg:left-8",
        "link": "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
    };
    useEffect(() => {
        function handleScreenSize() : void {
            setIsLGView(window.innerWidth >= 1024);
        }

        window.addEventListener("resize", handleScreenSize);
        return () => { window.removeEventListener("resize", handleScreenSize) };
    });

    return (<>
        <header className={ styles.header }>
            <SectionNavBar />
        </header>
        <main>
            <Outlet />
        </main>
        <footer className={ styles.footer }>
            <p className="mb-4">&copy; 2025 FitTrack. All rights reserved.</p>
            <ul className="my-4 flex flex-row items-center justify-center gap-4">
                <li><a className={ styles.link } href="#" target="blank">Privacy Policy</a></li>
                <li><a className={ styles.link } href="#" target="blank">Terms of Service</a></li>
            </ul>
            <img className="w-[100px] h-auto mt-4 rounded-lg" src="https://placehold.co/100x50?text=FitTrack+Logo" alt="FitTrack logo" />
        </footer>
    </>);
}
