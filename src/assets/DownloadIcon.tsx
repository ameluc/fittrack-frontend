interface iconProps
{
    color?: string,
    width?: string,
    height?: string
};

function DownloadIcon({ color="#292D32", width, height } : iconProps)
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
        aria-label="download icon">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>);
}

export default DownloadIcon;
