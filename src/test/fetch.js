const MTA_API_KEY = import.meta.env.VITE_MTA_X_API_KEY;

export async function mtaBusApi(){
    const header = {method:"GET",headers:{"x-api-key":MTA_API_KEY}};
    return await fetch("https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/camsys%2Fbus-alerts.json",header).catch(err => console.error(err));
}

export async function nationalWeatherAPI(){
    return await fetch("https://api.weather.gov/alerts/active?area=NY").catch(err => console.error(err));
}