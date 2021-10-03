import { MutableRefObject } from "react";

export const writer = (ref: MutableRefObject<HTMLHeadingElement | HTMLSpanElement>, interval: number, text: string) => {

    //console.log("elemento: ",element)
    const textArray = String(text).split("");
    //console.log("textArray: ",textArray)
    if (ref?.current) {
        ref.current.innerHTML = ""
        textArray.forEach((character, i) => {
            setTimeout(() => {
                ref.current.innerHTML += character;
            }, i * Number(interval))
        })
    }
}
