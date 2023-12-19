//import react into the bundle
import React, {useState} from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

const TrafficLight = () =>{
    const [ color, setColor] = useState("Red");
    return(
        <div className="Container">
            <div className="Lightpost">

            </div>
            <div className="Box">
                    <button
                     className={`Red ${color === "Red" ? "Light" : " "}`}
                     onClick={() => setColor("Red")}>    
                        
                    </button>

                    <button 
                    className={`Yellow ${color === "Yellow" ? "Light" : " "}`}
                    onClick={() => setColor("Yellow")}> 
                        
                    </button>

                    <button 
                    className={`Green ${color === "Green" ? "Light" : " "}`}
                    onClick={() => setColor("Green")}> 
                        
                    </button>
            </div>
        </div>
    )
}

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
