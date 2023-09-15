import { useEffect, useRef, useState } from 'react'
import { testAPI } from '../test/fetch';

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
    const [count, setCount] = useState(0);
    const [singleFeed, setSingleFeed] = useState(
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
      }
    )
    const timerRef = useRef();
    

    /**
     * getDataFromAPI()
     * ----------------------------
     * fetch from api & attatch to the state hook.
     * 
     */
    async function getDataFromAPI(){
      const resp = await testAPI()
      const json = await resp.json()
      setData([...json.entity]);
    }

    /** fetch data from the API */
    useEffect(()=>{
        getDataFromAPI();
    },[]);

    /** if data is loaded, loaded to be true */
    useEffect(()=>{
        if(data.length != 0 && data[0].id){
            setLoaded(true);
        }
        else{
            setLoaded(false);
        }
    },[data]);

    useEffect(()=>{
      timerRef.current = setInterval(()=>setCount(prev => prev + 1), 1000);

      /** fetch every 30 min */
      if(count % 1800 == 0){
        getDataFromAPI();
        setCount(0);
      }

      if(count % 30 == 0){
        setSingleFeed({...data[Math.floor(Math.random() * data.length)]});
      }

      return () => {clearInterval(timerRef.current);};
    },[])

    return(
        <>
            {loaded ? data.map((elem, index) => (
                <div key={elem.id} className="card" style={{width: "18rem"}}>
                    <h5 key={elem.id + "alerttype"} className="card-title">{elem.alert["transit_realtime.mercury_alert"]["alert_type"]}</h5>
                </div>
            )) : (<div><p>still loading</p></div>)}
        </>
    )
}

export default MTAHeadline