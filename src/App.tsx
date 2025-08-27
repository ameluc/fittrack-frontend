import { useState } from "react";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App()
{
    const [ theme, setTheme ] = useState(localStorage.getItem("theme"));

    return (<>
        <NavBar className="
            sticky
            top-4
            z-1
            w-fit
            h-auto
            mx-auto
            px-4
            rounded-3xl
            bg-gray-50
            shadow-md
            flex
            flex-col
            items-center
            justify-center
            dark:bg-sky-800" />
        <Outlet context={{ theme, setTheme }} />
        <Footer className="
            w-full
            h-auto
            py-12
            bg-sky-800
            flex
            flex-col
            items-center
            justify-center
            text-sm
            text-gray-100" />
    </>);
}

export default App;
