interface ButtonProps
{
    className?: string,
    buttonActive?: boolean
    buttonIcon?: React.ReactNode,
    buttonId?: string,
    buttonImg?: string,
    buttonText?: string,
    buttonType: "submit" | "reset" | "button" | undefined,
    onClick?: () => void,
    ref?: React.Ref<HTMLButtonElement>
};


export default function Button({ className="", buttonActive=false, buttonIcon, buttonId="", buttonImg="", buttonText="", buttonType, onClick, ref } : ButtonProps)
{
    return (<button className={ className } id={ buttonId } type={ buttonType } onClick={ onClick } ref={ ref } disabled={ buttonActive }>
        { buttonImg && <img src={ buttonImg } alt={ buttonText ? "" : buttonText } /> }
        { buttonIcon && buttonIcon }
        { buttonText && buttonText }
    </button>);
}
