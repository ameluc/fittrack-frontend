import type { JSX } from "react";


interface CardProps
{
    className?: string,
    sectionTitle?: string,
    sectionElements?: JSX.Element
};


export default function CardDashboard({ className, sectionTitle } : CardProps) : JSX.Element
{
    return (<></>);
}
