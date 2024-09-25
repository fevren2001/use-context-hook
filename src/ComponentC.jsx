import { useContext } from "react"
import ComponentD from "./ComponentD"
import { nContext } from "./ComponentA"
function ComponentC(){
    const n = useContext(nContext)
    return(
    <div className="box">
        <h1>Component C</h1>
        <p>Hello {n}</p>
        <ComponentD></ComponentD>
    </div>
)
}

export default ComponentC