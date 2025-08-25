interface ButtonProps
{
    className?: string,
    buttonIcon?: React.ReactNode,
    buttonImg?: string,
    buttonText?: string,
    buttonType: "submit" | "reset" | "button" | undefined,
    onClick?: () => void
};

function Button({ className="", buttonIcon, buttonImg="", buttonText="", buttonType, onClick } : ButtonProps)
{
    return (<button className={ className } type={ buttonType } onClick={ onClick }>
        { buttonImg && <img src={ buttonImg } alt={ buttonText ? "" : buttonText } /> }
        { buttonIcon && buttonIcon }
        { buttonText && buttonText }
    </button>);
}

export default Button;
