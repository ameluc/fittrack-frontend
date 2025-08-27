interface iconProps
{
    className?: string,
    color?: string,
    width?: string,
    height?: string
};

function FeatureIcon({ className, color, width="16", height="16" } : iconProps)
{
    return (<svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={ width }
        height={ height }
        className={ className }
        role="img"
        aria-label="feature icon">
        <rect x="3" y="3" width="7" height="7"
            fill="none"
            stroke={ color ?? "currentColor" }
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" />
        <rect x="14" y="3" width="7" height="7"
            fill="none"
            stroke={ color ?? "currentColor" }
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" />
        <rect x="14" y="14" width="7" height="7"
            fill="none"
            stroke={ color ?? "currentColor" }
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" />
        <rect x="3" y="14" width="7" height="7"
            fill="none"
            stroke={ color ?? "currentColor" }
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" />
    </svg>);
}

export default FeatureIcon;
