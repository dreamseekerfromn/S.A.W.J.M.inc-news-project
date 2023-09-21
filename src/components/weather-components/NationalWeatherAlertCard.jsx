import { useState } from "react";

export default function NationalWeatherAlertCard({feed}){
    const [toggleDescription, setToggleDescription] = useState(false);
    const [toggleInstruction, setToggleInstruction] = useState(false);  
    
    function handleDescription() {
        setToggleDescription(!toggleDescription);
      }
    
      function handleInstruction() {
        setToggleInstruction(!toggleInstruction);
      }
    return(
    <div key={feed["properties"]["id"]} className="card">
            <div className="card-body">
              <div className="card-title weather-alert-area">
                <strong>Area:</strong>
                {feed["properties"]["areaDesc"]}
              </div>

              <div className="card-title">{feed["properties"]["headline"]}</div>
              <div className="card-body">
                <div className="alert-card" onClick={() => handleDescription()}>
                  <strong>Description</strong>
                  {toggleDescription ? (
                    <p>{feed["properties"]["description"]}</p>
                  ) : null}
                </div>
                <br />
                <div className="alert-card" onClick={() => handleInstruction()}>
                  <strong>Instruction</strong>
                  {toggleInstruction ? (
                    <p>{feed["properties"]["instruction"]}</p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>)
}