interface iconProps
{
    color?: string,
    width?: string,
    height?: string
};

function FeatureIcon({ color="#292D32", width, height } : iconProps)
{
    return (<svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={ width }
        height={ height }
        fill="none"
        stroke={ color || "currentColor" }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        role="img"
        aria-label="feature icon">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
    </svg>);
}

export default FeatureIcon;
