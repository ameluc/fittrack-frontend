interface iconProps
{
    color?: string,
    width?: string,
    height?: string
};

function PricingIcon({ color="#292D32", width, height } : iconProps)
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
        aria-label="pricing icon">
        <rect x="2" y="5" width="20" height="14" rx="2" ry="2"/>
        <line x1="2" y1="10" x2="22" y2="10"/>
    </svg>);
}

export default PricingIcon;
