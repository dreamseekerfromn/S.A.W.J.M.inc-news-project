import { useEffect, useState } from 'react'
import { mtaBusApi } from '../test/fetch';
import NationalWeatherAlert from './NationalWeatherAlert';

function MTA() {
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

    /** fetch data from the API */
    useEffect(()=>{
        async function getDataFromAPI(){
            const resp = await mtaBusApi()
            const json = await resp.json()
            setData([...json.entity]);
        }

        try{
            getDataFromAPI();
        } catch {err => console.error(err); }
    },[]);

    /** if data is loaded, loaded to be true */
    useEffect(()=>{
        const timeout = setTimeout(() => {
            if(data.length != 0 && data[0].id){
                setLoaded(true);
            }
            else{
                setLoaded(false);
            }
        }, 3000);
        
        return () => clearTimeout(timeout);
    },[data]);

    return(
        <>
            {loaded ? data.map((elem, index) => (
                <div key={elem.id} className="card" style={{width: "18rem"}}>
                    <h5 key={elem.id + "alerttype"} className="card-title">{elem.alert["transit_realtime.mercury_alert"]["alert_type"]}</h5>
                    <div key={elem.id + "text"} dangerouslySetInnerHTML={{__html:elem.alert.header_text.translation[1].text}} className="card-text"></div>
                    <div key={elem.id + "description"} dangerouslySetInnerHTML={{__html:elem.alert["description_text"].translation[1].text}} className="card-text"></div>
                </div>
            )) : (<div><p>still loading</p></div>)}
            <NationalWeatherAlert />
        </>
    )
}

export default MTA