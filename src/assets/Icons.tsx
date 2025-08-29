interface IconProps
{
    className?: string,
    color?: string,
    width?: string,
    height?: string,
    visible?: boolean
};


export function IconUiDark({ className, color, width="16", height="16" } : IconProps)
{
    return (<svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={ width }
        height={ height }
        className={ className }
        role="img"
        aria-label="dark mode icon">
        <path
            d="M2.02911 12.42C2.38911 17.57 6.75911 21.76 11.9891 21.99C15.6791 22.15 18.9791 20.43 20.9591 17.72C21.7791 16.61 21.3391 15.87 19.9691 16.12C19.2991 16.24 18.6091 16.29 17.8891 16.26C12.9991 16.06 8.99911 11.97 8.97911 7.13996C8.96911 5.83996 9.23911 4.60996 9.72911 3.48996C10.2691 2.24996 9.61911 1.65996 8.36911 2.18996C4.40911 3.85996 1.69911 7.84996 2.02911 12.42Z"
            fill="none"
            stroke={ color ?? "currentColor" }
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round" />
    </svg>);
}

export function IconUiLight({ className, color, width="16", height="16" } : IconProps)
{
    return (<svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={ width }
        height={ height }
        className={ className }
        role="img"
        aria-label="light mode icon">
        <path
            d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
            fill="none"
            stroke={ color ?? "currentColor" }
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round" />
        <path
            d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
            fill="none"
            stroke={ color ?? "currentColor" }
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" />
    </svg>);
}

export function IconDownload({ className, color, width="16", height="16" } : IconProps)
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

export function IconFeature({ className, color, width="16", height="16" } : IconProps)
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

export function IconLogin({ className, color, width="16", height="16" } : IconProps)
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

export function IconPricing({ className, color, width="16", height="16" } : IconProps)
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

export function IconTestimonial({ className, color, width="16", height="16" } : IconProps)
{
    return (<svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={ width }
        height={ height }
        className={ className }
        role="img"
        aria-label="testimonial icon">
        <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            fill="none"
            stroke={ color ?? "currentColor" }
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" />
    </svg>);
}

export function IconVisibility({ className, color, width="16", height="16", visible } : IconProps)
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
