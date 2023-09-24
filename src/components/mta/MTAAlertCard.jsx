import { useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import "../../App.css";

/**
 * MTAAlertCard()
 * ================================
 * a child component of MTA.jsx. This component is pupposed to render single alert feed for its parent.
 * 
 * @param {React prop} alertFeed = a state hook from its ancestor, contains all data for single alert feed 
 */
export default function MTAAlertCard({ alertFeed }) {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  //alert -> header, description, transit_blah...
  const alertType =  alertFeed.alert["transit_realtime.mercury_alert"]["alert_type"];
  const alertHeader = alertFeed.alert.header_text;
  const alertDesc = alertFeed.alert["description_text"];
  const alertRoute = alertFeed.alert.informed_entity;

  /**
   * handleOnClick()
   * ========================
   * change toggle status when a user click single card.
   */
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

      <div className="card-text" key={alertFeed.id+"route"}>
        <strong>Route: </strong>{alertRoute.map((route) => (<>{route.route_id} </>))}
      </div>
      <br />
      <div
        key={alertFeed.id + "text"} className="card-text"
      >{alertHeader ? alertHeader.translation[0].text : null}</div>
      <br />
      {alertDesc ? (
        <>
          <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
            Description
          </Button>
          <Overlay target={target.current} show={show} placement="right">
            {({
              placement: _placement,
              arrowProps: _arrowProps,
              show: _show,
              popper: _popper,
              hasDoneInitialMeasure: _hasDoneInitialMeasure,
              ...props
            }) => (
              <div
                {...props}
                style={{
                  position: 'absolute',
                  backgroundColor: 'rgba(255, 100, 100, 0.85)',
                  padding: '2px 10px',
                  color: 'white',
                  borderRadius: 3,
                  ...props.style,
                  text: "wrap",
                  width: "20vw",
                  fontSize: "12px"
                }}
              >
                {alertDesc.translation[0].text}
              </div>
            )}
          </Overlay>
      </>
      ) : null}
    </div>
  );
}
