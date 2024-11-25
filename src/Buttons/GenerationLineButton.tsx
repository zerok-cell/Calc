import {Key, useRef} from "react";
import ButtonCalc from "./Button.tsx";

export default function GenerationLineButton({massiveButton}: { massiveButton: string[][] }) {
    const refInput = useRef<HTMLInputElement|null>(null);
    const addtoFieldSymbol = objectbutton =>{
        const inputText:string = objectbutton.target.innerHTML
        const inputref = refInput.current
        if (inputref){
            const fieldText = inputref.value
            if(inputText === "="){
                inputref.value = eval(fieldText);
            }
            if(inputText === "C"){
                inputref.value = '';
            }
            else{
                inputref.value += objectbutton.target.innerHTML
        }
        }
    }
    return (
        <>
            <div>
                <input ref={refInput} type="text"/>
                {
                    massiveButton.map((item: string[], ) => {
                        const element = item.map((deeplevel:string,index: Key | null | undefined)=>{
                            return <ButtonCalc onClick={addtoFieldSymbol} key={index} symbol={deeplevel}/>
                        })
                        return (
                            <div>{element}</div>
                        )
                    })
                }
            </div>
        </>
    );
}