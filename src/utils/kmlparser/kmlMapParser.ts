import { kml } from '@tmcw/togeojson';

import DOMParser from 'react-native-html-parser';
import ToGeo from './togeojson';

const html = `<?xml version="1.0" encoding="utf-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <Placemark>
      <name>Portland</name>
      <Point>
        <coordinates>-122.681944,45.52,0</coordinates>
      </Point>
    </Placemark>
    <Placemark>
      <name>Rio de Janeiro</name>
      <Point>
        <coordinates>-43.196389,-22.908333,0</coordinates>
      </Point>
    </Placemark>
    <Placemark>
      <name>Istanbul</name>
      <Point>
        <coordinates>28.976018,41.01224,0</coordinates>
      </Point>
    </Placemark>
    <Placemark>
      <name>Reykjavik</name>
      <Point>
        <coordinates>-21.933333,64.133333,0</coordinates>
      </Point>
    </Placemark>
    <Placemark>
      <name>Simple Polygon</name>
      <Polygon>
        <outerBoundaryIs>
          <LinearRing>
            <coordinates>-122.681944,45.52,0
            -43.196389,-22.908333,0
            28.976018,41.01224,0
            -21.933333,64.133333,0
            -122.681944,45.52,0</coordinates>
          </LinearRing>
        </outerBoundaryIs>
      </Polygon>
    </Placemark>
  </Document>
</kml>`;
const parser = new DOMParser.DOMParser();

<<<<<<< HEAD
console.log;
=======
// html
const parsed = parser.parseFromString(html, "text/xml");
>>>>>>> feat/map-component


console.log("kml-map-parser");

let kmlMarkupParsed =  ToGeo.kml(parsed);
console.log(kmlMarkupParsed);


export function kmlTextToGeoJson(xml: string) {
  const parsed = parser.parseFromString(xml, "text/xml");
  return kml(parsed);
}

// console.log(JSON.stringify(kmlMarkup, null, 2))

// import {Loader, LoaderOptions} from 'google-maps';
// // or const {Loader} = require('google-maps'); without typescript

// const options: LoaderOptions = {/* todo */};
// const loader = new Loader('my-api-key', options);

// const google = await loader.load();
// const map = new google.maps.Map(document.getElementById('map'), {
  //     center: {lat: -34.397, lng: 150.644},
  //     zoom: 8,
  // });
  
export default kmlMarkupParsed;
