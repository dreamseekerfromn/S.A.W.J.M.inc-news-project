import { useState } from "react";
import "../App.css";

export default function MTAAlertCard({ alertFeed }) {
  const [toggle, setToggle] = useState(false);

  //alert -> header, description, transit_blah...
  const alertType =  alertFeed.alert["transit_realtime.mercury_alert"]["alert_type"];
  const alertHeader = alertFeed.alert.header_text;
  const alertDesc = alertFeed.alert["description_text"];
  const alertRoute = alertFeed.alert.informed_entity;

  function handleOnClick() {
    setToggle(!toggle);
  }

  return (
    <div
      key={alertFeed.id}
      className="card col-3 m-2 alert-card"
      style={{ width: "18rem" }}
      onClick={() => handleOnClick()}
    >
      <h5 
        key={alertFeed.id + "alerttype"} 
        className="card-title" 
        style={ alertType == "Delays" ? {color:"gold"} : 
                alertType == "Special Event" ? {color: "red"} :
                alertType == "Buses Detoured" ? {color: "#00A36C"} :
                alertType == "Expect Delays" ? {color: "gold"} :
                alertType == "Boarding Change" ? {color: "#00A36C"} :
                alertType == "Multiple Changes" ? {color: "red"} : 
                alertType.includes("Planned") ? {color: "skyblue"} : {color: "black"}}>
        {alertType}
      </h5>

      <div className="card-text">
        <strong>Route: </strong>{alertRoute.map((route) => (<>{route.route_id} </>))}
      </div>
      <br />
      <div
        key={alertFeed.id + "text"} className="card-text"
      >{alertHeader ? alertHeader.translation[0].text : null}</div>
      <br />
      {toggle ? (
        alertFeed.description_text ? (
        <div
          key={alertFeed.id + "description"} className="card-text">
            {alertDesc.translation[0].text}
        </div>) : (null) 
      ) : null}
    </div>
  );
}
