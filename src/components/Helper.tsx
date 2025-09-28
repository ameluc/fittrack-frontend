interface HelperProp {
    className?: string
}

export default function Helper({ className="" } : HelperProp) {
    return (<div className={ className } />);
}
