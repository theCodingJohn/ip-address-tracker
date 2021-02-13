export interface MapStyle {
  style: string;
  className: string;
  zoom: [number];
  center: [number, number];
}

export interface Coordinates {
  coordinates: [number, number];
}

export interface UserDataInterface {
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

export interface IpInterface {
  ipAddress: string
}

export interface DataContextInterface {
  userData: UserDataInterface | null | undefined;
  setUserData: React.Dispatch<React.SetStateAction<UserDataInterface | null>>;
  searchedIp: IpInterface | null | undefined;
  setSearchedIp: React.Dispatch<React.SetStateAction<IpInterface | null>>;
}

export interface ChildrenProps {
  children: React.ReactNode;
}