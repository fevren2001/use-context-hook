import { createContext, useState } from "react"
import ComponentB from "./ComponentB"

export const nContext = createContext()
function ComponentA(){
    const [n, setN] = useState("Fati")
    return(
    <div className="box">
        <h1>Component A</h1>
        <p>Hello {n}</p>
        <nContext.Provider value={n}>
            <ComponentB ></ComponentB>
        </nContext.Provider>
    </div>
)
}

export default ComponentA