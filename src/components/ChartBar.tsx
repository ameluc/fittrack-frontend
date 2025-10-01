import type { JSX } from "react";
import { ResponsiveBar, type BarLegendProps } from "@nivo/bar";


interface ComponentProp {
    data: Record<string, string>[],
    indexBy?: string,
    labelSkipWidth?: number,
    labelSkipHeight?: number,
    legends?: BarLegendProps[],
    axisBottom?: Record<string, string | number>,
    axisLeft?: Record<string, string | number>,
    margin?: Record<string, number>,
}

export default function ChartBar({ data, indexBy, labelSkipWidth, labelSkipHeight, legends, axisBottom, axisLeft, margin } : ComponentProp): JSX.Element {
    return (<ResponsiveBar data={ data } indexBy={ indexBy } labelSkipWidth={ labelSkipWidth } labelSkipHeight={ labelSkipHeight } legends={ legends } axisBottom={ axisBottom } axisLeft={ axisLeft } margin={ margin } />);
}
