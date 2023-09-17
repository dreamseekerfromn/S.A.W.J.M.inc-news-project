import { useEffect, useRef, useState } from "react";
import { testAPI } from "../test/fetch";
import "./MTAHeadline.css";

function MTAHeadline() {
  /** declare state hooks */
  /** initialize "data" state hook to same structure as the json from the MTA api */
  const [data, setData] = useState([
    {
      id: "",
      alert: {
        active_period: [
          {
            start: 0,
            end: 0,
          },
        ],
        informed_entity: [
          {
            agency_id: "",
            route_id: "",
            "transit_realtime.mercury_entity_selector": {
              sort_order: "",
            },
          },
        ],
        header_text: {
          translation: [
            {
              text: "",
              language: "",
            },
            {
              text: "",
              language: "",
            },
          ],
        },
        description_text: {
          translation: [
            {
              text: "",
              language: "",
            },
            {
              text: "",
              language: "",
            },
          ],
        },
        "transit_realtime.mercury_alert": {
          created_at: 0,
          updated_at: 0,
          alert_type: "",
          display_before_active: 0,
          screens_summary: {
            translation: [
              {
                text: "",
                language: "",
              },
              {
                text: "",
                language: "",
              },
            ],
          },
        },
      },
    },
  ]);

  const [loaded, setLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(0);
  const [singleFeed, setSingleFeed] = useState({
    id: "",
    alert: {
      active_period: [
        {
          start: 0,
          end: 0,
        },
      ],
      informed_entity: [
        {
          agency_id: "",
          route_id: "",
          "transit_realtime.mercury_entity_selector": {
            sort_order: "",
          },
        },
      ],
      header_text: {
        translation: [
          {
            text: "",
            language: "",
          },
          {
            text: "",
            language: "",
          },
        ],
      },
      description_text: {
        translation: [
          {
            text: "",
            language: "",
          },
          {
            text: "",
            language: "",
          },
        ],
      },
      "transit_realtime.mercury_alert": {
        created_at: 0,
        updated_at: 0,
        alert_type: "",
        display_before_active: 0,
        screens_summary: {
          translation: [
            {
              text: "",
              language: "",
            },
            {
              text: "",
              language: "",
            },
          ],
        },
      },
    },
  });
  const timerRef = useRef();
  const timerRef2 = useRef();

  /**
   * getDataFromAPI()
   * ----------------------------
   * fetch from api & attatch to the state hook.
   *
   */
  async function getDataFromAPI() {
    const resp = await testAPI();
    const json = await resp.json();
    setData([...json.entity]);
  }

  /** fetch data from the API */
  useEffect(() => {
    getDataFromAPI();
  }, []);

  /** if data is loaded, loaded to be true */
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (data.length != 0 && data[0].id) {
        setSingleFeed({ ...data[Math.floor(Math.random() * data.length)] });
        setLoaded(true);
      } else {
        setLoaded(false);
      }
    },3000);

    return () => clearTimeout(timeout);
  }, [data]);

  useEffect(() => {
    if (loaded) {
      //timerRef.current = setInterval(()=>setCount(prev => prev + 1), 1000);

      /** fetch every 30 min */
      timerRef2.current = setInterval(() => {
        setLoaded(false);
        setMounted(false);
        getDataFromAPI();
      }, 1800000);

      timerRef.current = setInterval(() => setSingleFeed(Object.assign({}, data[Math.floor(Math.random() * data.length)])), 3000);

      return () => {
        clearInterval(timerRef.current);
        clearInterval(timerRef2.current);
      };
    }
  }, [mounted]);

  useEffect(() => {
    if (singleFeed.id && loaded) {
      setMounted(true);
    } else {
      setMounted(false);
    }
  }, [singleFeed]);

  return (
    <>
      {mounted ? (
        <div key={singleFeed.id} className="flow-container">
          <div className="flow-wrap">{singleFeed.alert["transit_realtime.mercury_alert"].alert_type} {singleFeed.alert.header_text.translation[0].text}</div>
        </div>
      ) : (
        <div>
          <p>still loading</p>
        </div>
      )}
    </>
  );
}

export default MTAHeadline;
