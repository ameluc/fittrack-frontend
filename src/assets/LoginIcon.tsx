interface iconProps
{
    className?: string,
    color?: string,
    width?: string,
    height?: string
};

function LoginIcon({ className, color, width="16", height="16" } : iconProps)
{
    return (<svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={ width }
        height={ height }
        className={ className }
        role="img"
        aria-label="login icon">
        <circle
            cx="12.392342"
            cy="6.3829803"
            r="4.4246397"
            id="circle1"
            fill="none"
            stroke={ color ?? "currentColor" }
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round" />
        <path
            d="m 20.036159,15 c -0.513648,-2 -2.208294,-4.796292 -5.412344,-4.796292 m -4.468244,-0.0031 c -3.2040498,0 -5.697071,3.463938 -5.697071,7.12571 0,1.220589 1.2187739,3.387137 7.933836,3.387137 6.715063,0 6.711648,7.87e-4 7.764721,-0.183089"
            id="path1"
            fill="none"
            stroke={ color ?? "currentColor" }
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round" />
        <path
            d="m 18.34434,18.547129 2.197169,1.997418 -2.197169,1.997418"
            id="path2"
            fill="none"
            stroke={ color ?? "currentColor" }
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round" />
    </svg>);
}

export default LoginIcon;
