interface FooterProps
{
    className?: string
};

function Footer({ className="" } : FooterProps)
{
    return (<footer className={ className }>
        <p className="mb-4">&copy; 2025 FitTrack. All rights reserved.</p>
        <ul className="my-4 flex flex-row items-center justify-center gap-4">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
        </ul>
        <img className="w-[100px] h-auto mt-4 rounded-lg" src="https://placehold.co/100x50?text=FitTrack+Logo" alt="FitTrack logo" />
    </footer>);
}

export default Footer;
