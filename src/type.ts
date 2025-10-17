import type { ChangeEvent, JSX, Ref } from "react";


export type ButtonProps = {
    className? : string,
    buttonActive? : boolean
    buttonIcon? : JSX.Element,
    buttonId? : string,
    buttonImg? : string,
    buttonText? : string,
    buttonType : "button" | "reset" | "submit" | undefined,
    onClick? : () => void,
    ref? : Ref<HTMLButtonElement>
};
export type CardProps = {
    className? : string,
    cardCite? : string,
    cardElements? : JSX.Element,
    cardImg? : string,
    cardImgText? : string,
    cardText? : string,
    cardTitle? : string,
    cardReversed? : boolean
};
export type InputProps = {
    className? : string,
    inputId : string,
    inputName? : string,
    inputType : string,
    placeholder? : string,
    entry : string,
    required : boolean,
    onEntry : (event : ChangeEvent<HTMLInputElement>) => void,
    ref? : Ref<HTMLInputElement>,
};
export type SectionProps = {
    className? : string,
    sectionImgSrc? : string,
    sectionText? : string,
    sectionLinks? : Array<Record<string, string>>
};
export type RadialChart = {
    title : string,
    element : JSX.Element
};
