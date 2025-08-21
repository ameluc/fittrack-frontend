interface InputProps
{
    className?: string,
    inputId?: string,
    inputType?: string,
    placeholder?: string,
    entry: string,
    onEntry: (event: React.ChangeEvent<HTMLInputElement>) => void
    required?: boolean
};

function InputField({
    className="",
    inputId="",
    inputType="text",
    placeholder="",
    entry,
    onEntry,
    required } : InputProps)
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
    />);
}

export default InputField;
