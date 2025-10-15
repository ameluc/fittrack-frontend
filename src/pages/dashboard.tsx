import type { JSX, RefObject } from "react";
import type { PartialTheme } from "@nivo/theming";
import { useEffect, useRef, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveRadialBar } from "@nivo/radial-bar";
import { IconArrowLeft, IconArrowRight } from "../assets/Icons";
import Button from "../components/Button";
import { mockDailyActivity } from "../data/mockDailyActivity";
import { mockProgressOverviewOnCalories, mockProgressOverviewOnWeight, mockProgressOverviewOnWorkoutGoal } from "../data/mockProgressOverview";


const mockUserProfile : Record<string, string | number> = {
    "username": "Yazeel",
    "age": 27,
    "height": 175,
    "weight": 75,
    "preferredUnits": "metric"
};

export default function Dashboard() : JSX.Element {
    const [ isMDView, setIsMDView ] = useState<boolean>(window.innerWidth >= 768);
    const [ isLGView, setIsLGView ] = useState<boolean>(window.innerWidth >= 1024);
    const [ isSticky, setIsSticky ] = useState<boolean>(false);
    const [ currentRadialIndex, setCurrentRadialIndex ] = useState<number>(0);
    const refTitleContainer : RefObject<HTMLElement | null> = useRef<HTMLElement>(null);
    const styles : Record<string, string> = {
        "dataSection": "w-full h-auto rounded-3xl p-4 flex flex-col items-center justify-center gap-4 shadow-[8px_8px_16px_#c7c8ca,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#1a2330,-8px_-8px_16px_#232f42]",
        "dataH2": "text-lg md:text-2xl lg:text-3xl",
        "dataDiv": "w-full h-[40vh] rounded-lg shadow-[inset_8px_8px_16px_#c7c8ca,inset_-8px_-8px_16px_#ffffff] dark:shadow-[inset_8px_8px_16px_#1a2330,inset_-8px_-8px_16px_#232f42] flex flex-row items-center justify-center",
        "settingsSection": "lg:fixed lg:right-8 w-full lg:w-fit h-auto rounded-3xl p-4 flex flex-col items-center justify-center gap-4 shadow-[8px_8px_16px_#c7c8ca,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#1a2330,-8px_-8px_16px_#232f42]",
        "settingsButton": "w-full h-auto lg:border-2 rounded-lg lg:border-blue-400/0 lg:px-12 py-2 flex flex-col items-center justify-center shadow-[8px_8px_16px_#c7c8ca,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#1a2330,-8px_-8px_16px_#232f42] lg:hover:cursor-pointer",
        "sticky": "z-10 sticky top-52 px-6 w-full h-auto bg-gray-100 dark:bg-gray-800 shadow-[8px_8px_16px_#c7c8ca] dark:shadow-[8px_8px_16px_#1a2330] flex flex-col md:flex-row items-center justify-center md:gap-2",
        "notSticky": "relative px-6 lg:px-20 w-full h-auto flex flex-col md:flex-row items-center justify-center md:gap-2",
        "action": "w-fit h-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 lg:cursor-pointer lg:p-2 lg:rounded-xl transition lg:delay-100 lg:duration-200 lg:ease-in-out lg:active:scale-90 lg:hover:scale-110"
    };
    const chartStyles : PartialTheme = {
        // "background": "#ffffff",
        "text": {
            "fontSize": 11,
            "fill": "#333333",
            "outlineWidth": 0,
            "outlineColor": "#ffffff"
        },
        "axis": {
            "domain": {
                "line": {
                    "stroke": "currentcolor",
                    "strokeWidth": 1
                }
            },
            "legend": {
                "text": {
                    "fontSize": 12,
                    "fill": "currentcolor",
                    "outlineWidth": 0,
                    "outlineColor": "currentcolor"
                }
            },
            "ticks": {
                "line": {
                    "stroke": "currentcolor",
                    "strokeWidth": 1
                },
                "text": {
                    "fontSize": 11,
                    "fill": "currentcolor",
                    "outlineWidth": 0,
                    "outlineColor": "currentcolor"
                }
            }
        },
        // "grid": {
        //     "line": {
        //         "stroke": "#dddddd",
        //         "strokeWidth": 1
        //     }
        // },
        // "legends": {
        //     "title": {
        //         "text": {
        //             "fontSize": 11,
        //             "fill": "#333333",
        //             "outlineWidth": 0,
        //             "outlineColor": "#ffffff"
        //         }
        //     },
        //     "text": {
        //         "fontSize": 11,
        //         "fill": "#333333",
        //         "outlineWidth": 0,
        //         "outlineColor": "#ffffff"
        //     },
        //     "ticks": {
        //         "line": {},
        //         "text": {
        //             "fontSize": 10,
        //             "fill": "#333333",
        //             "outlineWidth": 0,
        //             "outlineColor": "#ffffff"
        //         }
        //     }
        // },
        // "annotations": {
        //     "text": {
        //         "fontSize": 13,
        //         "fill": "#333333",
        //         "outlineWidth": 2,
        //         "outlineColor": "#ffffff",
        //         "outlineOpacity": 1
        //     },
        //     "link": {
        //         "stroke": "#000000",
        //         "strokeWidth": 1,
        //         "outlineWidth": 2,
        //         "outlineColor": "#ffffff",
        //         "outlineOpacity": 1
        //     },
        //     "outline": {
        //         "stroke": "#000000",
        //         "strokeWidth": 2,
        //         "outlineWidth": 2,
        //         "outlineColor": "#ffffff",
        //         "outlineOpacity": 1
        //     },
        //     "symbol": {
        //         "fill": "#000000",
        //         "outlineWidth": 2,
        //         "outlineColor": "#ffffff",
        //         "outlineOpacity": 1
        //     }
        // },
        "tooltip": {
            // "wrapper": {},
            "container": {
                "background": "#ffffff",
                "color": "#333333",
                "fontSize": 12
            },
            // "basic": {},
            // "chip": {},
            // "table": {},
            // "tableCell": {},
            // "tableCellValue": {}
        }
    };
    const chartMargin = { "top": 20, "bottom": 60, "left": 40, "right": 40 };
    const radialCharts = [
        (<ResponsiveRadialBar theme={ chartStyles } margin={ chartMargin } data={ mockProgressOverviewOnWeight } />),
        (<ResponsiveRadialBar theme={ chartStyles } margin={ chartMargin } data={ mockProgressOverviewOnCalories } />),
        (<ResponsiveRadialBar theme={ chartStyles } margin={ chartMargin } data={ mockProgressOverviewOnWorkoutGoal } />)
    ];
    const radialChartsTitles = [ "Weight", "Calories", "Workout" ];

    function handlePreviousResponsiveRadialBarViews() : void {
        if (currentRadialIndex === 0) {
            setCurrentRadialIndex(radialCharts.length - 1);
        } else {
            setCurrentRadialIndex(prev => prev -= 1);
        }
    }
    function handleNextResponsiveRadialBarViews() : void {
        if (currentRadialIndex === radialCharts.length - 1) {
            setCurrentRadialIndex(0);
        } else {
            setCurrentRadialIndex(prev => prev += 1);
        }
    }

    useEffect(() => {
        function handleScroll() {
            const element = refTitleContainer.current;
            if (!element) return;
            if (!isLGView) setIsSticky(element.getBoundingClientRect().top <= 208);
        }
        window.addEventListener("scroll", handleScroll);
        return () => { window.removeEventListener("scroll", handleScroll) };
    });
    useEffect(() => {
        function handleScreenSize() {
            setIsLGView(window.innerWidth >= 1024);
            setIsMDView(window.innerWidth >= 768);
        }
        window.addEventListener("resize", handleScreenSize);
        return () => { window.removeEventListener("resize", handleScreenSize) };
    });

    return (<div className="w-full h-auto flex flex-col lg:flex-row">
        { isLGView && <div className="w-full lg:w-[25%] h-[100vh] lg:h-[100vh]" /> }
        <div className="w-full h-auto flex flex-col items-center justify-center gap-10">
            <header className={ isSticky ? styles.sticky : styles.notSticky } ref={ refTitleContainer }>
                <h1 className="text-2xl md:text-4xl lg:text-5xl">It's good to see you,</h1>
                <h1 className="text-2xl md:text-4xl lg:text-5xl">[UserName]!</h1>
            </header>
            { !isSticky && <div className="w-[80%] h-[1px] bg-gray-200" /> }
            <main className="w-full h-auto px-6 lg:px-20 flex md:grid flex-col lg:grid-cols-3 items-center justify-center gap-12">
                <div className="lg:col-span-2 w-full h-auto flex flex-col items-center justify center gap-12 lg:gap-20">
                    <section className={ styles.dataSection }>
                        <h2 className={ styles.dataH2 }>Daily Activity</h2>
                        <div className={ styles.dataDiv }>
                            <div className="w-full h-full">
                                <ResponsiveBar
                                    margin={{ "top": 40, "bottom": 100, "left": 120, "right": 40 }}
                                    // axisBottom={{ style: ticks }}
                                    // axisLeft={{ style: ticks }}
                                    layout={ isMDView ? "horizontal" : "vertical" }
                                    data={ mockDailyActivity.data }
                                    theme={ chartStyles }
                                    indexBy={ "date" }
                                    keys={ mockDailyActivity.keys }
                                    labelSkipWidth={8}
                                    labelSkipHeight={8}
                                    groupMode="grouped"
                                    tooltip={() => {
                                        return (<>

                                        </>);
                                    }}
                                    onClick={() => {
                                        return (<>

                                        </>);
                                    }}
                                />
                            </div>
                        </div>
                    </section>
                    <section className={ styles.dataSection }>
                        <h2 className={ styles.dataH2 }>
                            { radialChartsTitles[currentRadialIndex] } Progress Overview
                        </h2>
                        <div className={ styles.dataDiv }>
                            <Button className={ styles.action } buttonType="button" buttonIcon={ <IconArrowLeft width="40" height="40" /> } onClick={handlePreviousResponsiveRadialBarViews} />
                            <div className="w-full h-full">
                                { radialCharts[currentRadialIndex] }
                            </div>
                            <Button className={ styles.action } buttonType="button" buttonIcon={ <IconArrowRight width="40" height="40" /> } onClick={handleNextResponsiveRadialBarViews} />
                        </div>
                    </section>
                </div>
                <section className={ styles.settingsSection }>
                    <h2 className="text-base md:text-lg lg:text-xl">Profile & Settings</h2>
                    <div className="w-full lg:w-fit h-auto flex flex-col items-center justify-center gap-8">
                        { mockUserProfile.username }
                        <Button className={ styles.settingsButton + "lg:hover:border-blue-400" } buttonType="button" buttonText="Profile" />
                        <Button className={ styles.settingsButton + "lg:hover:border-yellow-400" } buttonType="button" buttonText="Settings" />
                    </div>
                </section>
            </main>
        </div>
    </div>);
}
