/** MTA alert feed data structure */
export const MTAObj = {
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

  /** weatherapi data structure */
  export const weatherObj = {
    "location": {
        "name": "",
        "region": "",
        "country": "",
        "lat": 0,
        "lon": 0,
        "tz_id": "",
        "localtime_epoch": 0,
        "localtime": ""
    },
    "current": {
        "last_updated_epoch": 0,
        "last_updated": "",
        "temp_c": 0,
        "temp_f": 0,
        "is_day": 0,
        "condition": {
            "text": "",
            "icon": "",
            "code": 0
        },
        "wind_mph": 0,
        "wind_kph": 0,
        "wind_degree": 0,
        "wind_dir": "",
        "pressure_mb": 0,
        "pressure_in": 0,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 0,
        "cloud": 0,
        "feelslike_c": 0.0,
        "feelslike_f": 0.0,
        "vis_km": 0.0,
        "vis_miles": 0.0,
        "uv": 0.0,
        "gust_mph": 0.0,
        "gust_kph": 0.0
    }
  }