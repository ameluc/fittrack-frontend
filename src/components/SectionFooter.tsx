import type { JSX } from "react";


interface SectionProps
{
    className?: string
};


export default function SectionFooter({ className="" } : SectionProps) : JSX.Element
{
    return (<footer className={ className }>
        <p className="mb-4">&copy; 2025 FitTrack. All rights reserved.</p>
        <ul className="my-4 flex flex-row items-center justify-center gap-4">
            <li><a className="
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-blue-400" href="#" target="blank">Privacy Policy</a></li>
            <li><a className="
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-blue-400" href="#" target="blank">Terms of Service</a></li>
        </ul>
        <img className="w-[100px] h-auto mt-4 rounded-lg" src="https://placehold.co/100x50?text=FitTrack+Logo" alt="FitTrack logo" />
    </footer>);
}
