import { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";


function Login()
{
    const [ emailData, setEmailData ] = useState("");
    const [ passwordData, setPasswordData ] = useState("");

    return (<div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl min-h-screen p-2 sm:p-4 md:p-6">
        <h2 className="text-lg md:text-2xl lg:text-4xl">Welcome!</h2>
        <form
        className="w-full lg:max-w-lg h-auto mb-4 border-2 border-amber-700/20 rounded-lg px-2 sm:px-6 py-4 sm:py-8 bg-amber-100 shadow-md flex flex-col items-center justify-center"
        // action="/submit"
        // method="POST"
        >
            <label className="w-[100%] h-auto my-2 flex flex-col items-center justify-center gap-2 text-lg sm:text-2xl text-gray-800" htmlFor="email">Email
                <InputField
                    className="w-full h-auto py-1.5 px-1 rounded-lg bg-gray-50 text-sm sm:text-base text-gray-800 placeholder:text-xs sm:placeholder:text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    inputId="email"
                    inputType="email"
                    placeholder="Email (eg: abc@something.com)"
                    entry={ emailData }
                    onEntry={ (e) => { setEmailData(e.target.value) } }
                    required
                />
            </label>
            <label className="w-[100%] h-auto my-2 flex flex-col items-center justify-center gap-2 text-lg sm:text-2xl text-gray-800" htmlFor="password">Password
                <InputField
                    className="w-full h-auto py-1.5 px-1 rounded-lg bg-gray-50 text-sm sm:text-base text-gray-800 placeholder:text-xs sm:placeholder:text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    inputId="password"
                    inputType="password"
                    placeholder="Password"
                    entry= { passwordData }
                    onEntry={ (e) => { setPasswordData(e.target.value) } }
                    required
                />
            </label>
            <Button
                className="lg:cursor-pointer w-full h-auto sm:w-auto border-2 border-gray-700/20 rounded-lg px-8 py-1 bg-teal-500 shadow-md flex flex-col items-center justify-center text-lg sm:text-1xl text-gray-100 font-semibold transition lg:delay-100 lg:duration-200 lg:ease-in-out active:scale-95 sm:active:scale-80 lg:hover:scale-110 lg:hover:bg-teal-400"
                buttonType="submit"
                buttonText="Log in"
            />
        </form>
    </div>);
}

export default Login;
