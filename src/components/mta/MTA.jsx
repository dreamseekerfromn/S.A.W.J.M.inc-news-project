import { useEffect, useState } from "react";
import { mtaBusApi } from "../../api/fetch";
import MTAAlertCard from "./MTAAlertCard.jsx"
import { MTAObj } from "../../api/objectStructure";

/**
 * MTA()
 * =======================================
 * a react component to render whole MTA alert feed page.
 * 
 * @returns renders whole MTA component.
 */
function MTA() {
  /** declare state hooks */
  /** initialize "data" state hook to same structure as the json from the MTA api */
  const [data, setData] = useState([MTAObj]);
  const [loaded, setLoaded] = useState(false);
  const [routeText, setRouteText] = useState("");

  /** fetch data from the API */
  useEffect(() => {
    async function getDataFromAPI() {
      const resp = await mtaBusApi();
      const json = await resp.json();
      setData([...json.entity]);
    }

    try {
      getDataFromAPI();
    } catch {
      (err) => console.error(err);
    }
  }, []);

  /** if data is loaded, loaded to be true */
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (data.length != 0 && data[0].id != "") {
        setLoaded(true);
      } else {
        setLoaded(false);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [data]);

  /**
   * handleTextChange()
   * ===========================
   * change "routeText" state hook's value when text in the inputfield "MTA_route" is changed
   */
  function handleTextChange() {
    const route = document.getElementById("MTA_route").value;
    setRouteText(route);
  }

  return (
    <div className="container w-100">
      <div className="row">
        <div className="input-group flex-nowrap">
          <input
            type="text"
            className="form-control"
            id="MTA_route"
            placeholder="Route name"
            aria-describedby="addon-wrapping"
            onChange={handleTextChange}
          ></input>
        </div>
      </div>
      <div className="row" key="MTA_container_row">
        {loaded ? (
          !routeText.trim() ? (
            data.map((elem) => <MTAAlertCard alertFeed={elem} />)
          ) : (
            data
              .filter((routes) =>
                routes.alert.informed_entity.find((route) =>
                  route.route_id.toLowerCase().includes(routeText.toLowerCase())
                )
              )
              .map((elem) => <MTAAlertCard alertFeed={elem} />)
          )
        ) : (
          <div>
            <p>still loading</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MTA;
