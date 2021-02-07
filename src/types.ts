export interface Place {
    name: string;
    coords?: Position;
    imgUrl?: string;
    location: string;
    tags?: string[];
    description?: string;
}

export interface Route {
    name: string;
    points: Place[];
    coords?: Position;
    imgUrl?: string;
    tags?: string[];
    description?: string;
}

export interface Location {
    name: string;
    coords?: Position;
}

export interface Position {
    lat: number;
    lng: number;
    latitude?: number;
    longitude?: number;
}
