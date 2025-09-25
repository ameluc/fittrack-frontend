import type { RefObject } from "react";


export function activateButton(refInput: RefObject<HTMLInputElement | null>, refButton: RefObject<HTMLButtonElement | null>)
{
    if (refButton.current && refInput.current)
    {
        refInput.current.classList.remove("focus-visible:ring-red-400");
        refButton.current.classList.remove("lg:cursor-not-allowed");
        refButton.current.classList.add("active:scale-95");
        refButton.current.classList.add("lg:cursor-pointer");
        refButton.current.classList.add("lg:hover:scale-110");
        refButton.current.classList.add("lg:hover:bg-teal-400");
        refButton.current.disabled = false;
    }
}

export function disableButton(refInput: RefObject<HTMLInputElement | null>, refButton: RefObject<HTMLButtonElement | null>)
{
    if (refButton.current && refInput.current)
    {
        refInput.current.classList.add("focus-visible:ring-red-400");
        refButton.current.classList.remove("active:scale-95");
        refButton.current.classList.remove("lg:cursor-pointer");
        refButton.current.classList.remove("lg:hover:scale-110");
        refButton.current.classList.remove("lg:hover:bg-teal-400");
        refButton.current.classList.add("lg:cursor-not-allowed");
        refButton.current.disabled = true;
    }
}

export function setUiMode(mode: string | null)
{
    if (mode === "dark")
    {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
    }
    else if (mode === "light")
    {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
    }
    else
    {
        localStorage.removeItem("theme");
    }
}

export function validateEmail(email: string): boolean
{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
}

export function validatePassword(password: string): boolean
{
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

    return regex.test(password);
}
