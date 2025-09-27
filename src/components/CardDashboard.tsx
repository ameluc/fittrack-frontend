import type { JSX } from "react";


interface CardProps {
    className?: string,
    sectionElements?: JSX.Element,
    sectionTitle?: string
};


export default function CardDashboard({ className, sectionElements, sectionTitle } : CardProps) : JSX.Element {
    return (<div className={ className }>
        <h2>{ sectionTitle }</h2>
        <div className="">{ sectionElements }</div>
    </div>);
}
