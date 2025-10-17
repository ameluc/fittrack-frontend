import type { JSX } from "react";
import type { CardProps } from "../type";


export default function CardFeature( { className="", cardImg, cardImgText, cardText, cardTitle, cardReversed=false } : CardProps ) : JSX.Element {
    const styles = {
        "img": "w-full h-auto rounded-2xl",
        "divImg": "w-full h-auto p-4 rounded-4xl shadow-[8px_8px_16px_#c7c8ca,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#1a2330,-8px_-8px_16px_#232f42]",
        "divText": "px-4 flex flex-col items-center justify-center lg:items-center",
        "textTitle": "py-2 font-medium text-xl text-[#1e3a8a] dark:text-[#84f3d0]",
        "text": "text-center lg:text-center"
    };

    if (cardReversed) {
        return (<div className={ className }>
            <div className={ styles.divImg }>
                <img className={ styles.img } src={ cardImg } alt={ cardImgText } />
            </div>
            <div className={ styles.divText + " md:items-start" }>
                <h3 className={ styles.textTitle }>{ cardTitle }</h3>
                <p className={ styles.text + " md:text-start" }>{ cardText }</p>
            </div>
        </div>);
    } else {
        return (<div className={ className }>
            <div className={ styles.divText + " md:items-end" }>
                <h3 className={ styles.textTitle }>{ cardTitle }</h3>
                <p className={ styles.text + " md:text-end" }>{ cardText }</p>
            </div>
            <div className={ styles.divImg }>
                <img className={ styles.img } src={ cardImg } alt={ cardImgText } />
            </div>
        </div>);
    }
}
