import { nationalWeatherAPI } from "../test/fetch";
import { useState, useEffect } from "react";

export default function NationalWeatherAlert() {
  const [weatherAlert, setWeatherAlert] = useState({
    "@context": [
      "https://geojson.org/geojson-ld/geojson-context.jsonld",
      {
        "@version": "",
        wx: "",
        "@vocab": "",
      },
    ],
    type: "",
    features: [
      {
        id: "",
        type: "",
        geometry: null,
        properties: {
          "@id": "",
          "@type": "",
          id: "",
          areaDesc: "",
          geocode: {
            SAME: [""],
            UGC: [""],
          },
          affectedZones: [""],
          references: [
            {
              "@id": "",
              identifier: "",
              sender: "",
              sent: "",
            },
          ],
          sent: "",
          effective: "",
          onset: "",
          expires: "",
          ends: "",
          status: "",
          messageType: "",
          category: "",
          severity: "",
          certainty: "",
          urgency: "",
          event: "",
          sender: "",
          senderName: "",
          headline: "",
          description: "",
          instruction: "",
          response: "",
          parameters: {
            AWIPSidentifier: [""],
            WMOidentifier: [""],
            NWSheadline: [""],
            BLOCKCHANNEL: ["", "", ""],
            VTEC: [""],
            eventEndingTime: [""],
            expiredReferences: [""],
          },
        },
      },
    ],
    title: "",
    updated: "",
  });

  const [loaded, setLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [toggleDescription, setToggleDescription] = useState(false);
  const [toggleInstruction, setToggleInstruction] = useState(false);

  async function fetchNationalWeatherAlert() {
    const responde = await nationalWeatherAPI();
    const json = await responde.json();
    setWeatherAlert({ ...json });
  }

  useEffect(() => {
    fetchNationalWeatherAlert();
  }, []);

  useEffect(() => {
    if (weatherAlert["title"]) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [weatherAlert]);

  useEffect(() => {
    if (loaded && weatherAlert["features"].length != 0) {
      setMounted(true);
    } else {
      setMounted(false);
    }
  }, [loaded]);

  function handleDescription() {
    setToggleDescription(!toggleDescription);
  }

  function handleInstruction() {
    setToggleInstruction(!toggleInstruction);
  }

  return (
    <div>
      {mounted ? (
        weatherAlert.features.map((feed) => (
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
          </div>
        ))
      ) : (
        <div className="card-body">
          <div className="card-title">There is no weather alert in NY area</div>
        </div>
      )}
    </div>
  );
}
