import type { JSX } from "react";


type HelperProp = {
    className?: string
}

export default function Helper( { className="" } : HelperProp ) : JSX.Element {
    return (<div className={ className } />);
}
