import type { JSX } from "react";
import type { InputProps } from "../../type";


export default function Input( { className="", inputId, inputName, inputType="text", placeholder="", entry, onEntry, required, ref } : InputProps ) : JSX.Element {
    return (<input className={ className } id={ inputId } name={ inputName } type={ inputType } placeholder={ placeholder } aria-label={ inputType } value={ entry } onChange={ onEntry } required={ required } ref={ ref }/>);
}
