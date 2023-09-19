import { useState } from "react";
import "../App.css";

export default function MTAAlertCard({ alertFeed }) {
  const [toggle, setToggle] = useState(false);

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
      <h5 key={alertFeed.id + "alerttype"} className="card-title">
        {alertFeed.alert["transit_realtime.mercury_alert"]["alert_type"]}
      </h5>
      <div
        key={alertFeed.id + "text"}
        dangerouslySetInnerHTML={{
          __html: alertFeed.alert.header_text.translation[1].text,
        }}
        className="card-text"
      ></div>
      {toggle ? (
        <div
          key={alertFeed.id + "description"}
          dangerouslySetInnerHTML={{
            __html: alertFeed.alert["description_text"].translation[1].text,
          }}
          className="card-text"
        ></div>
      ) : null}
    </div>
  );
}
