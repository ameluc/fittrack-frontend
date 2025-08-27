interface iconProps
{
    className?: string,
    color?: string,
    width?: string,
    height?: string
};

function DownloadIcon({ className, color, width="16", height="16" } : iconProps)
{
    return (<svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={ width }
        height={ height }
        className={ className }
        role="img"
        aria-label="download icon">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
            fill="none"
            stroke={ color ?? "currentColor" }
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" />
        <polyline points="7 10 12 15 17 10"
            fill="none"
            stroke={ color ?? "currentColor" }
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" />
        <line x1="12" y1="15" x2="12" y2="3"
            fill="none"
            stroke={ color ?? "currentColor" }
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" />
    </svg>);
}

export default DownloadIcon;
