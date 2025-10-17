import type { JSX } from "react";
import type { SectionProps } from "../../type";


export default function SectionFooter( { className="", sectionImgSrc, sectionLinks, sectionText } : SectionProps ) : JSX.Element {
    const styles = {
        "link": "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
    }

    return (<footer className={ className }>
        <div>
            <p className="mb-4">{ sectionText }</p>
        </div>
        <div>
            <ul className="my-4 flex flex-row items-center justify-center gap-4">
                { sectionLinks?.map((element, index) =>
                    <li key={ `${ element.text }-${ index }` }>
                        <a className={ styles.link } href={ element.href } target="blank">{ element.text }</a>
                    </li>
                ) }
            </ul>
        </div>
        <div>
            <img className="w-[100px] h-auto mt-4 rounded-lg" src={ sectionImgSrc } alt="FitTrack logo" />
        </div>
    </footer>);
}
