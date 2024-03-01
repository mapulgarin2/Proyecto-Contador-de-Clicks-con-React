import React from "react";
import '../style-sheet/Contador.css'
function Contador({ numClicks }) {
    return (
        <div className="contador">
            <p>{ numClicks }</p>
        </div>
    );
}
export default Contador;