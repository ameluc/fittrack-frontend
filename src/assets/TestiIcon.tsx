interface iconProps
{
    color?: string,
    width?: string,
    height?: string
};

function TestiIcon({ color="#292D32", width, height } : iconProps)
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
        aria-label="testimonial icon">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>);
}

export default TestiIcon;
