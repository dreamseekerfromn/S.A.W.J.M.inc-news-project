const MTA_API_KEY = import.meta.env.VITE_MTA_X_API_KEY;

/**
 * mtaBusApi()
 * =====================================
 * fetch to MTA alert feed api.
 * 
 * @returns {Response} - will return Response from MTA alert feed 
 */
export async function mtaBusApi(){
    const header = {method:"GET",headers:{"x-api-key":MTA_API_KEY}};
    return await fetch("https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/camsys%2Fbus-alerts.json",header).catch(err => console.error(err));
}

/**
 * nationalWeatherAPI()
 * ======================================
 * fetch to the national weather center api.
 * @returns {Response} - will return Response from the national weather alert.
 */
export async function nationalWeatherAPI(){
    return await fetch("https://api.weather.gov/alerts/active?area=NY").catch(err => console.error(err));
}