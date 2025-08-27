interface InputProps
{
    className?: string,
    inputId?: string,
    inputType?: string,
    placeholder?: string,
    entry: string,
    required?: boolean,
    onEntry: (event: React.ChangeEvent<HTMLInputElement>) => void,
    ref?: React.Ref<HTMLInputElement>,
};

function InputField({
    className="",
    inputId="",
    inputType="text",
    placeholder="",
    entry,
    onEntry,
    required,
    ref } : InputProps)
{
    return (<input
        className={ className }
        id={ inputId }
        type={ inputType }
        placeholder={ placeholder }
        aria-label={ inputType }
        value={ entry }
        onChange={ onEntry }
        required={ required }
        ref={ ref }
    />);
}

export default InputField;
