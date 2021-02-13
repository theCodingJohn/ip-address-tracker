export interface MapStyle {
  style: string;
  className: string;
  zoom: [number];
  center: [number, number];
}

export interface Coordinates {
  coordinates: [number, number];
}

export interface UserDataInteface {
  "ip": string,
  "location": {
    "country": string,
    "region": string,
    "city": string,
    "lat": number,
    "lng": number,
    "postalCode": string,
    "timezone": string,
    "geonameId": number
  },
  "domains": string[],
  "as": {
    "asn": number,
    "name": string,
    "route": string,
    "domain": string,
    "type": string
  },
  "isp": string,
  "proxy": {
    "proxy": boolean,
    "vpn": boolean,
    "tor": boolean
  },
}

export interface DataContextInteface {
  userData: UserDataInteface | null;
  setUserData: (value: UserDataInteface) => void;
}

export interface ChildrenProps {
  children: React.ReactNode;
}