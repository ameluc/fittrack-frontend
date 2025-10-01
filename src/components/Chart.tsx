import type { JSX } from "react";
import { LineChart } from "recharts";


interface ComponentProp {
    data: Record<string, string>[],
    className?: string,
    width: number,
    height: number
}

export default function Chart({ className="", width, height, data } : ComponentProp): JSX.Element {
    return (<LineChart width={ width } height={ height } data={ data }>

    </LineChart>);
}
