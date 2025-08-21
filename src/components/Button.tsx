interface ButtonProps
{
    className?: string,
    buttonType: "submit" | "reset" | "button" | undefined,
    buttonText: string
}

function Button({ className="", buttonType, buttonText } : ButtonProps)
{
    return (<button className={ className } type={ buttonType }>
        { buttonText }
    </button>);
}

export default Button;
