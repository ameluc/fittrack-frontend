interface iconProps
{
    color1?: string,
    color2?: string,
    width?: string,
    height?: string
};

function LightModeIcon({ color1="#292D32", color2="#292D32", width, height } : iconProps)
{
    return (<svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={ width }
        height={ height }
        fill="none"
        role="img"
        aria-label="light mode icon">
        <path
            d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
            stroke={ color1 || "currentColor" }
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            opacity="0.4"
            d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
            stroke={ color2 }
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" />
    </svg>);
}

export default LightModeIcon;
