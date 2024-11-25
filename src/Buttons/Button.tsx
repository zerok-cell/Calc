import "./button.scss"
import {MouseEventHandler} from "react";




export default function ButtonCalc(
    {symbol, onClick}:{symbol: string, onClick: MouseEventHandler<HTMLButtonElement>}): JSX.Element
{

    return <button onClick={onClick} className={'button-class'}>{symbol}</button>
}