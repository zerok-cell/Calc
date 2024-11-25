
import "./app.scss"
import GenerationLineButton from "./Buttons/GenerationLineButton.tsx";
import {useRef} from "react";


function App() {


    const buttons = [
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0', '.', '=', '+'],
        ['C']
    ]
  return (
    <>


                <div>
                    <GenerationLineButton massiveButton={buttons}/>
                </div>


    </>
  )
}

export default App
