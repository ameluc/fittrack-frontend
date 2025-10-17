import type { JSX } from "react";
import type { CardProps } from "../type";


export default function CardDashboard( { className, cardElements, cardTitle } : CardProps ) : JSX.Element {
    return (<div className={ className }>
        <h2>{ cardTitle }</h2>
        <div className="">{ cardElements }</div>
    </div>);
}
