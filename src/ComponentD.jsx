import { useContext } from "react"
import {nContext} from "./ComponentA"

function ComponentD(){
    const n = useContext(nContext)
    return(
    <div className="box">
        <h1>Component D</h1>
        <p>Welcome {n}</p>
    </div>
)
}

export default ComponentD