import React from 'react';
import MapView from 'react-native-maps';
import CustomMarker from './CustomMarker';
import MapViewMarker from './Marker';

export const makeOverlays = (features: GeoJSON.Feature<GeoJSON.Geometry>[]) => {
    const points = features
        .filter(
            f =>
                f.geometry &&
                (f.geometry.type === 'Point' ||
                    f.geometry.type === 'MultiPoint'),
        )
        .map(feature =>
            (makeCoordinates(feature) as GeoPosition[]).map(coordinates =>
                makeOverlay(coordinates, feature),
            ),
        )
        .reduce(flatten, [])
        .map((overlay: Overlay) => ({ ...overlay, type: 'point' }));

    const lines = features
        .filter(
            f =>
                f.geometry &&
                (f.geometry.type === 'LineString' ||
                    f.geometry.type === 'MultiLineString'),
        )
        .map(feature =>
            (makeCoordinates(feature) as GeoPosition[]).map(coordinates =>
                makeOverlay(coordinates, feature),
            ),
        )
        .reduce(flatten, [])
        .map((overlay: Overlay) => ({ ...overlay, type: 'polyline' }));

    const multipolygons = features
        .filter(f => f.geometry && f.geometry.type === 'MultiPolygon')
        .map(feature =>
            (makeCoordinates(feature) as GeoPosition[]).map(coordinates =>
                makeOverlay(coordinates, feature),
            ),
        )
        .reduce(flatten, []);

    const polygons = features
        .filter(f => f.geometry && f.geometry.type === 'Polygon')
        .map(feature =>
            makeOverlay(makeCoordinates(feature) as GeoPosition[], feature),
        )
        // .reduce(flatten, [])
        .concat(multipolygons)
        .map((overlay: Overlay) => ({ ...overlay, type: 'polygon' }));

    return points.concat(lines).concat(polygons) as Overlay[];
};

const flatten = <T extends unknown>(prev: T[], curr: T[]) => prev.concat(curr);

interface Overlay {
    feature: GeoJSON.Feature<GeoJSON.Geometry>;
    coordinates: GeoPosition[] | GeoPosition | null;
    holes?: GeoPosition[];
    type?: 'point' | 'polyline' | 'polygon';
}

const makeOverlay = (
    coordinates: GeoPosition[] | GeoPosition,
    feature: GeoJSON.Feature<GeoJSON.Geometry>,
) => {
    const overlay: Overlay = {
        coordinates: null,
        feature,
    };
    if (
        feature.geometry.type === 'Polygon' ||
        feature.geometry.type === 'MultiPolygon'
    ) {
        overlay.coordinates = (coordinates as GeoPosition[])[0];
        if (Array.isArray(coordinates) && coordinates.length > 1) {
            overlay.holes = coordinates.slice(1);
        }
    } else {
        overlay.coordinates = coordinates;
    }
    return overlay;
};

interface GeoPosition {
    latitude: number;
    longitude: number;
    lat: number;
    lng: number;
}

const makePoint = (c: GeoJSON.Position): GeoPosition => ({
    latitude: c[1],
    longitude: c[0],
    lat: c[1],
    lng: c[0],
});

const makeLine = (l: GeoJSON.Position[]) => l.map(makePoint);

const makeCoordinates = (feature: GeoJSON.Feature<GeoJSON.Geometry>) => {
    const g = feature.geometry;
    if (g.type === 'Point') {
        return [makePoint(g.coordinates)];
    } else if (g.type === 'MultiPoint') {
        return g.coordinates.map(makePoint);
    } else if (g.type === 'LineString') {
        return [makeLine(g.coordinates)];
    } else if (g.type === 'MultiLineString') {
        return g.coordinates.map(makeLine);
    } else if (g.type === 'Polygon') {
        return g.coordinates.map(makeLine);
    } else if (g.type === 'MultiPolygon') {
        return g.coordinates.map(p => p.map(makeLine));
    } else {
        return [];
    }
};

const Geojson = (props: any) => {
    const overlays = makeOverlays(Array.from(props.geojson.features));

    const onMarkerPress = React.useCallback((overlay: Overlay) => {
        console.log(overlay.feature.properties?.name);
    }, []);

    return (
        <>
            {overlays.map((overlay, index) => {
                if (overlay.type === 'point') {
                    return (
                        <MapViewMarker
                            key={index}
                            coordinate={overlay.coordinates as any}
                            onPress={() => onMarkerPress(overlay)}
                            pinColor="green"
                            // {...overlay.feature.properties}
                        >
                            <CustomMarker
                                index={index + 1}
                                status={index % 3}
                            />
                        </MapViewMarker>
                    );
                }
                if (overlay.type === 'polyline') {
                    return (
                        <MapView.Polyline
                            key={index}
                            path={overlay.coordinates as any}
                            {...overlay.feature.properties}
                        />
                    );
                }
            })}
        </>
    );
};

export default Geojson;
