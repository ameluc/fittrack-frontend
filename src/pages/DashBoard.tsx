import { useEffect, useState, type JSX } from "react";


export default function Dashboard() : JSX.Element
{
    const [ isMDView, setIsMDView ] = useState<boolean>(window.innerWidth >= 768);
    const [ isLGView, setIsLGView ] = useState<boolean>(window.innerWidth >= 1024);

    useEffect(() : () => void =>
    {
        function handleScreenSize()
        {
            setIsLGView(window.innerWidth >= 1024);
            setIsMDView(window.innerWidth >= 768);
        }

        window.addEventListener("resize", handleScreenSize);

        return () => { window.removeEventListener("resize", handleScreenSize) };
    }, [ isLGView, isMDView ]);

    return (<div className="w-full h-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-[25%] h-[10vh] lg:h-[100vh]" />
        <div className="w-full h-auto px-6 lg:px-20 flex flex-col items-center justify-center gap-40">
            <header className="sticky top-52 w-full h-auto flex flex-col items-center justify-center">
                <h1>It's good to see you, [UserName]!</h1>
            </header>

            <main className="w-full h-auto flex md:grid flex-col lg:grid-cols-2 items-center justify-center gap-12">
                <section className="w-full h-auto rounded-3xl flex flex-col items-center justify-center gap-4 shadow-[8px_8px_16px_#c7c8ca,-8px_-8px_16px_#ffffff]">
                    <h2>Daily Activity</h2>
                    <div className="placeholder">
                        [ Chart placeholder ]
                    </div>
                </section>
                <section className="w-full h-auto rounded-3xl flex flex-col items-center justify-center gap-4 shadow-[8px_8px_16px_#c7c8ca,-8px_-8px_16px_#ffffff]">
                    <h2>Progress Overview</h2>
                    <div className="placeholder">
                        [ Stats placeholder ]
                    </div>
                </section>
                <section className="w-full h-auto rounded-3xl flex flex-col items-center justify-center gap-4 shadow-[8px_8px_16px_#c7c8ca,-8px_-8px_16px_#ffffff]">
                    <h2>Profile & Settings</h2>
                    <div className="placeholder">
                        [ Quick link / button placeholder ]
                    </div>
                </section>
            </main>
        </div>
</div>);
}
