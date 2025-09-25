import { useEffect, useRef, useState, type JSX } from "react";

const quoteApi = "https://zenquotes.io/api/quotes";

export default function Dashboard() : JSX.Element
{
    const [ isMDView, setIsMDView ] = useState<boolean>(window.innerWidth >= 768);
    const [ isLGView, setIsLGView ] = useState<boolean>(window.innerWidth >= 1024);
    const [ isSticky, setIsSticky ] = useState<boolean>(false);
    const [ quotes, setQuotes ] = useState<Record<string, string>[]>([]);
    const [ index, setIndex ] = useState<number>(0);
    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ error, setError ] = useState<string | null>(null);

    const refTitleContainer = useRef<HTMLElement>(null);

    function handleQuote() : JSX.Element
    {
        if (isLoading)
        {
            return (<></>);
        }
        else if (error)
        {
            return (<>
                <h1 className="text-2xl md:text-4xl lg:text-5xl">It's good to see you,</h1>
                <h1 className="text-2xl md:text-4xl lg:text-5xl">[UserName]!</h1>
            </>);
        }
        else
        {
            return (<>
                <p>{ quotes[index].q }</p>
                <p>{ quotes[index].a }</p>
            </>);
        }
    }

    useEffect(() =>
    {
        async function getData(dataUrl: string)
        {
            try
            {
                const response = await fetch(dataUrl);

                if (!response.ok)
                {
                    throw new Error("Can't retrieve quotes");
                }

                const result = await response.json() as Record<string, string>[];

                setQuotes(result);

                if (result.length > 0)
                {
                    setIndex(Math.floor(Math.random() * result.length));
                }
            }
            catch (err: unknown)
            {
                if (err instanceof Error)
                {
                    setError(err.message);
                    console.error("Error type:", err.name);
                    console.error("Error message:", err.message);
                    console.error("Error stack", err.stack);
                }
                else
                {
                    setError(String(err));
                    console.error("Error message:", String(err));
                }
            }
            finally
            {
                setIsLoading(false);
            }
        }
        void getData(quoteApi);
    }, []);

    useEffect(() : () => void =>
    {
        function handleScroll()
        {
            if (refTitleContainer.current)
            {
                if (refTitleContainer.current.getBoundingClientRect().top > 208)
                {
                    setIsSticky(false);
                }
                else
                {
                    setIsSticky(true);
                }
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => { window.removeEventListener("scroll", handleScroll) };
    });

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
        <div className="w-full lg:w-[25%] h-[100vh] lg:h-[100vh]" />
        <div className="w-full h-auto flex flex-col items-center justify-center gap-8">
            <header className={ isSticky ? "sticky top-52 px-6 lg:px-20 w-full h-auto bg-gray-100 dark:bg-gray-800 shadow-[0px_8px_16px_#c7c8ca] dark:shadow-[0px_8px_16px_#1a2330] flex flex-col md:flex-row items-center justify-center md:gap-2" : "sticky top-52 px-6 lg:px-20 w-full h-auto bg-gray-100 dark:bg-gray-800 flex flex-col md:flex-row items-center justify-center md:gap-2"} ref={ refTitleContainer }>
                { isSticky && <h1 className="text-2xl md:text-4xl lg:text-5xl">It's good to see you,</h1> }
                { isSticky && <h1 className="text-2xl md:text-4xl lg:text-5xl">[UserName]!</h1> }
                { !isSticky && handleQuote() }
            </header>
            { !isSticky && <div className="w-[80%] h-[1px] bg-gray-200" /> }
            <main className="w-full h-auto px-6 lg:px-20 flex md:grid flex-col lg:grid-cols-2 items-center justify-center gap-12">
                <section className="w-full h-auto rounded-3xl p-4 flex flex-col items-center justify-center gap-4 overflow-y-auto shadow-[8px_8px_16px_#c7c8ca,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#1a2330,-8px_-8px_16px_#232f42]">
                    <h2 className="text-lg md:text-2xl lg:text-3xl">Daily Activity</h2>
                    <div className="w-full h-auto max-h-[50vh] rounded-lg p-2 flex flex-col items-center justify-center shadow-[inset_8px_8px_16px_#c7c8ca,inset_-8px_-8px_16px_#ffffff] dark:shadow-[inset_8px_8px_16px_#1a2330,inset_-8px_-8px_16px_#232f42]">
                        [ Chart placeholder ]
                    </div>
                </section>
                <section className="w-full h-auto rounded-3xl p-4 flex flex-col items-center justify-center gap-4 overflow-y-auto shadow-[8px_8px_16px_#c7c8ca,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#1a2330,-8px_-8px_16px_#232f42]">
                    <h2 className="text-lg md:text-2xl lg:text-3xl">Progress Overview</h2>
                    <div className="w-full h-auto max-h-[50vh] rounded-lg p-2 flex flex-col items-center justify-center shadow-[inset_8px_8px_16px_#c7c8ca,inset_-8px_-8px_16px_#ffffff] dark:shadow-[inset_8px_8px_16px_#1a2330,inset_-8px_-8px_16px_#232f42]">
                        [ Stats placeholder ]
                    </div>
                </section>
                <section className="w-full h-auto rounded-3xl p-4 flex flex-col items-center justify-center gap-4 shadow-[8px_8px_16px_#c7c8ca,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#1a2330,-8px_-8px_16px_#232f42]">
                    <h2 className="text-lg md:text-2xl lg:text-3xl">Profile & Settings</h2>
                    <div className="w-full h-auto rounded-lg p-2 flex flex-col items-center justify-center shadow-[8px_8px_16px_#c7c8ca,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#1a2330,-8px_-8px_16px_#232f42]">
                        [ Quick link / button placeholder ]
                    </div>
                </section>
            </main>
        </div>
</div>);
}
