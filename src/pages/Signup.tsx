import { useEffect, useRef, useState, type JSX } from "react";
import { Link } from "react-router";
import { activateButton, disableButton, validateEmail, validatePassword } from "../../utilitaries.ts";
import { IconVisibility } from "../assets/Icons.tsx";
import Button from "../components/Button.tsx";
import InputField from "../components/Input.tsx";


export default function Signup() : JSX.Element {
    const [ dataEmail, setDataEmail ] = useState<string>("");
    const [ dataName, setDataName ] = useState<string>("");
    const [ dataPassword1, setDataPassword1 ] = useState<string>("");
    const [ dataPassword2, setDataPassword2 ] = useState<string>("");
    const [ isPasswordGood, setIsPasswordGood ] = useState<boolean>(validatePassword(dataPassword1));
    const [ isPasswordMatch, setIsPasswordMatch ] = useState<boolean>(dataPassword1 === dataPassword2);
    const [ showPassword, setShowPassword ] = useState<boolean>(false);
    const refButton = useRef<HTMLButtonElement>(null);
    const refInputEmail = useRef<HTMLInputElement>(null);
    const refInputName = useRef<HTMLInputElement>(null);
    const refInputPassword1 = useRef<HTMLInputElement>(null);
    const refInputPassword2 = useRef<HTMLInputElement>(null);

    function togglePassword() : void {
        setShowPassword(prev => !prev);
    }
    function handleSubmit(event: React.FormEvent) : void {
        event.preventDefault();
        console.log({ dataName, dataEmail, dataPassword1, dataPassword2 });
    }

    useEffect(() => {
        if (dataEmail.length !== 0 && validateEmail(dataEmail)) {
            activateButton(refInputEmail, refButton);
        } else {
            disableButton(refInputEmail, refButton);
        }
    }, [ dataEmail ]);
    useEffect(() => {
        if (dataPassword1.length !== 0 && !validatePassword(dataPassword1)) {
            setIsPasswordGood(validatePassword(dataPassword1));
            disableButton(refInputPassword1, refButton);
        } else {
            setIsPasswordGood(validatePassword(dataPassword1));
            activateButton(refInputPassword1, refButton);
        }
    }, [dataPassword1]);
    useEffect(() => {
        function checkPasswordMatch() {
            return dataPassword1 === dataPassword2
        }

        if (dataPassword2.length !== 0 && !checkPasswordMatch()) {
            setIsPasswordMatch(dataPassword1 === dataPassword2);
            disableButton(refInputPassword2, refButton);
        } else {
            setIsPasswordMatch(dataPassword1 === dataPassword2);
            activateButton(refInputPassword2, refButton);
        }
    }, [dataPassword1, dataPassword2]);

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
                    htmlFor="name">Name
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
                    inputId="name"
                    inputType="text"
                    placeholder="Name"
                    entry={ dataName }
                    onEntry={ (e) => {setDataName(e.target.value)} }
                    required
                    ref={ refInputName }/>
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
                        entry= { dataPassword1 }
                        onEntry={ (e) => {setDataPassword1(e.target.value)} }
                        required
                        ref={ refInputPassword1 } />
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
                    buttonIcon={ <IconVisibility width="24" height="24" visible={ showPassword ? false : true } /> }
                    buttonType="button"
                    onClick={ togglePassword }/>
                </div>
                { dataPassword1.length !== 0 && !isPasswordGood ?
                    <div className="w-full h-auto
                        mx-auto
                        my-2
                        rounded-lg
                        py-2
                        bg-[#f9fafb]
                        inset-shadow-sm
                        flex
                        flex-col
                        items-center
                        justify-center
                        text-[12px]
                        text-gray-400
                        md:w-fit">
                        <p className="mt-1 mb-2 text-sm">Requirements:</p>
                        <div className="w-[90%] h-[1px] mx-auto bg-gray-300" />
                        <ul className="mt-1 list-disc">
                            <li className="mx-12">a minimum length of 8 characters</li>
                            <li className="mx-12">one uppercase letter (A-Z)</li>
                            <li className="mx-12">one lowercase letter (a-z)</li>
                            <li className="mx-12">one number (0-9)</li>
                            <li className="mx-12">one special character (!@#$%^&*()_+&#123;&#125;[]:;.,&lt;&gt;?)</li>
                        </ul>
                    </div> : <></>
                }
                <label className="w-full h-auto
                        pl-8
                        pt-4
                        pb-2
                        text-lg
                        md:text-2xl"
                    htmlFor="password">Confirm Password
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
                    inputId="password"
                    inputType={ showPassword ? "text" : "password"}
                    placeholder="Password"
                    entry= { dataPassword2 }
                    onEntry={ (e) => {setDataPassword2(e.target.value)} }
                    required
                    ref={ refInputPassword2 }/>
                { dataPassword1.length !== 0 && dataPassword2.length !== 0 && !isPasswordMatch ?
                    <div className="w-full h-auto
                        mx-auto
                        my-2
                        rounded-lg
                        px-8
                        py-2
                        bg-[#f9fafb]
                        inset-shadow-sm
                        flex
                        flex-col
                        items-center
                        justify-center
                        text-[12px]
                        text-gray-400
                        md:w-fit">
                        <p className="text-sm">Passwords don't match</p>
                    </div> : <></>
                }
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
                    buttonText="Sign up"
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
                to={"/login"}>
                Already have an account?
            </Link>
        </div>
    </div>);
}
