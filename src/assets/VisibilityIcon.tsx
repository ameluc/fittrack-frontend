interface iconProps
{
    className?: string,
    color?: string,
    width?: string,
    height?: string,
    visible: boolean
};

function VisibilityIcon({ className, color, width="16", height="16", visible } : iconProps)
{
    if (visible)
    {
        return (<svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={ width }
            height={ height }
            className={ className }
            role="img"
            aria-label="visibility icon">
            <path
                d="m15 12a3 3 0 11-6 0 3 3 0 016 0z"
                fill="none"
                stroke={ color ?? "currentColor" }
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round" />
            <path
                d="m2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                fill="none"
                stroke={ color ?? "currentColor" }
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>);
    }
    else
    {
        return (<svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={ width }
            height={ height }
            role="img"
            aria-label="visibility icon">
            <path
                d="m13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.964 9.964 0 012.189-3.368M6.179 6.179A9.964 9.964 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.974 9.974 0 01-4.247 5.208M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                fill="none"
                stroke={ color ?? "currentColor" }
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="m3 3l18 18"
                fill="none"
                stroke={ color ?? "currentColor" }
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>);
    }
}

export default VisibilityIcon;
