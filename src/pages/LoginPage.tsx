import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { activateButton, disableButton, validateEmail, validatePassword } from "../../utilitaries.ts";
import Button from "../components/Button.tsx";
import InputField from "../components/InputField.tsx";
import VisibilityIcon from "../assets/VisibilityIcon.tsx";


function LoginPage()
{
    const [ dataEmail, setDataEmail ] = useState("");
    const [ dataPassword, setDataPassword ] = useState("");
    const [ showPassword, setShowPassword ] = useState(false);
    const refButton = useRef<HTMLButtonElement>(null);
    const refInputEmail = useRef<HTMLInputElement>(null);
    const refInputPassword = useRef<HTMLInputElement>(null);

    function togglePassword()
    {
        setShowPassword(prev => !prev);
    }

    function handleSubmit(event: React.FormEvent)
    {
        event.preventDefault();
        console.log({dataEmail, dataPassword});
    }

    useEffect(() =>
    {
        if(dataEmail.length !== 0 && !validateEmail(dataEmail))
        {
            disableButton(refInputEmail, refButton);
        }
        else
        {
            activateButton(refInputEmail, refButton);
        }
    }, [dataEmail]);

    useEffect(() =>
    {
        if(dataPassword.length !== 0 && !validatePassword(dataPassword))
        {
            disableButton(refInputPassword, refButton);
        }
        else
        {
            activateButton(refInputPassword, refButton);
        }
    }, [dataPassword]);

    return (<div className="min-h-screen">
        <div className="w-[90%] h-auto
            mx-auto
            my-12
            px-4
            rounded-3xl
            bg-gray-100
            shadow-md
            flex
            flex-col
            items-center
            justify-center
            dark:bg-gray-700
            md:w-xl
            lg:w-2xl">
            <h2 className="
                py-4
                italic
                text-2xl
                md:text-3xl
                lg:text-4xl">Welcome!
            </h2>
            <div className="w-[90%] h-[1px] mx-auto bg-gray-300" />
            <form className="w-full h-auto
                    flex
                    flex-col
                    items-center
                    justify-center"
                action="/submit"
                method="POST"
                onSubmit={handleSubmit}
                target="blank">
                <label className="w-full h-auto
                        pl-8
                        pt-4
                        pb-2
                        text-lg
                        md:text-2xl"
                    htmlFor="email">Email
                </label>
                <InputField className="w-full h-auto
                        rounded-lg
                        px-2
                        py-2
                        bg-gray-50
                        placeholder:text-center
                        placeholder:italic
                        placeholder:text-xs
                        placeholder-gray-400
                        text-sm
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-blue-400
                        dark:bg-gray-600
                        md:placeholder:text-sm
                        md:text-base"
                    inputId="email"
                    inputType="email"
                    placeholder="Email (eg: abc@something.com)"
                    entry={ dataEmail }
                    onEntry={ (e) => {setDataEmail(e.target.value)} }
                    required
                    ref={ refInputEmail }/>
                <label className="w-full h-auto
                        pl-8
                        pt-4
                        pb-2
                        text-lg
                        md:text-2xl"
                    htmlFor="password">Password
                </label>
                <div className="w-full h-auto
                        rounded-lg
                        bg-gray-50
                        flex
                        flex-row
                        items-center
                        justify-between
                        dark:bg-gray-600">
                    <InputField className="w-full h-auto
                            rounded-lg
                            px-2
                            py-2
                            bg-gray-50
                            placeholder:text-center
                            placeholder:italic
                            placeholder:text-xs
                            placeholder-gray-400
                            text-sm
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-blue-400
                            dark:bg-gray-600
                            md:placeholder:text-sm
                            md:text-base"
                        inputId="password"
                        inputType={ showPassword ? "text" : "password"}
                        placeholder="Password"
                        entry= { dataPassword }
                        onEntry={ (e) => { setDataPassword(e.target.value) } }
                        required
                        ref={ refInputPassword }/>
                        <Button className="w-fit h-fit
                            mr-1
                            rounded-lg
                            p-1
                            active:scale-60
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-blue-400
                            md:p-1
                            md:text-1xl
                            lg:cursor-pointer
                            transition
                            lg:delay-100
                            lg:duration-200
                            lg:ease-in-out
                            lg:hover:bg-gray-300
                            lg:dark:hover:bg-gray-500"
                        buttonIcon={ <VisibilityIcon width="24" height="24" visible={ showPassword ? false : true } /> }
                        buttonType="button"
                        onClick={ togglePassword }/>
                </div>
                <Button className="w-full h-fit
                        my-4
                        rounded-lg
                        pt-1
                        pb-1.5
                        bg-teal-500
                        shadow-md
                        shadow-teal-400/50
                        text-lg
                        text-gray-100
                        font-semibold
                        active:scale-95
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-blue-400
                        md:w-auto
                        md:px-10
                        md:pt-2
                        md:pb-2.5
                        md:text-1xl
                        lg:cursor-pointer
                        transition
                        lg:delay-100
                        lg:duration-200
                        lg:ease-in-out
                        lg:hover:scale-110
                        lg:hover:bg-teal-400"
                    buttonId="submit-button"
                    buttonType="submit"
                    buttonText="Log in"
                    ref={ refButton }/>
            </form>
            <Link className="w-auto h-auto
                    my-2
                    rounded-lg
                    pt-1
                    pb-1.5
                    active:scale-95
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-400
                    md:px-2
                    md:pt-2
                    md:pb-2.5
                    md:text-1xl
                    lg:cursor-pointer
                    transition
                    lg:delay-100
                    lg:duration-200
                    lg:ease-in-out
                    lg:hover:bg-gray-200
                    lg:hover:text-teal-600
                    lg:dark:hover:bg-gray-600
                    lg:dark:hover:text-teal-300"
                to={"/signup"}>
                Don't have an account?
            </Link>
        </div>
    </div>);
}

export default LoginPage;
