import React from "react"
import Parent from "./Parent"

function GrandParent(props) {    
    console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
    return (
        <div>
            <p>I'm a GrandParent Component</p>
            <Parent />
            <Parent />
        </div>
    )
}

export default GrandParent