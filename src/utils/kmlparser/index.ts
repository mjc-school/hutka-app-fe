import { Belarus } from './mapData';

export { default as KmlMapParser } from './kmlMapParser';

const routes = [];
const routeImages = [];
let lastLastLineIndex = 0;

Belarus.features.forEach((item, index, arr) => {
    if (item.geometry.type === 'LineString') {
        const tempArr = arr.slice(lastLastLineIndex, index);
        lastLastLineIndex = index;
        routeImages.push(item.properties.gx_media_links);
        routes.push(tempArr);
    }
});

const routeNames = routes.map(item =>
    item
        .filter(item => item.geometry.type !== 'LineString')
        .map(item => {
            return item.properties.name;
        })
        .join('-'),
);

console.log(routeNames);
export { routes, routeNames, routeImages };
