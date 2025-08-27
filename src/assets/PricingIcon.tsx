interface iconProps
{
    className?: string,
    color?: string,
    width?: string,
    height?: string
};

function PricingIcon({ className, color, width="16", height="16" } : iconProps)
{
    return (<svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={ width }
        height={ height }
        className={ className }
        role="img"
        aria-label="pricing icon">
        <rect x="2" y="5" width="20" height="14" rx="2" ry="2"
            fill="none"
            stroke={ color ?? "currentColor" }
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"/>
        <line x1="2" y1="10" x2="22" y2="10"
            fill="none"
            stroke={ color ?? "currentColor" }
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" />
    </svg>);
}

export default PricingIcon;
