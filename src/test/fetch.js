export async function testAPI(){
    const header = {method:"GET",headers:{"x-api-key":"IQbkTECZFd8rfOAqS13Mj7utmZ4sf8ZC6pqG8on5"}};
    return await fetch("https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/camsys%2Fbus-alerts.json",header).catch(err => console.error(err));
}
