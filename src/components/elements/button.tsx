import type { JSX, } from "react";
import type { ButtonProps } from "../../type";


export default function Button( { className="", buttonActive=false, buttonIcon, buttonId="", buttonImg="", buttonText="", buttonType, onClick, ref } : ButtonProps ) : JSX.Element {
    return (<button className={ className } id={ buttonId } type={ buttonType } onClick={ onClick } ref={ ref } disabled={ buttonActive }>
        { buttonImg && <img src={ buttonImg } alt={ buttonText ? "" : buttonText } /> }
        { buttonIcon && buttonIcon }
        { buttonText && buttonText }
    </button>);
}
