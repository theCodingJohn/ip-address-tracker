# IP Address Tracker

This app let you track ip address location.

![Project preview](./md_assets/ip-address-tracker.gif)

## Challenges

This app took me 4 days (6 hours a day) to finish as it is the first project I built with Typescript. So, where I got stucked? Oh well, in making context API! This line of code, this damn line of code!

```js
interface DataContextInterface {
  userData: UserDataInterface | null | undefined;
  setUserData: React.Dispatch<React.SetStateAction<UserDataInterface | null>>;
  searchedIp: IpInterface | null | undefined;
  setSearchedIp: React.Dispatch<React.SetStateAction<IpInterface | null>>;
}

// correct solution, found by looking through other developers code
export const DataContext = createContext({} as DataContextInterface);
// thanks to this repo https://github.com/damirpristav/react-typescript-multi-lang-website-context-api/blob/master/src/context/lang.tsx

// keeps throwing error
export const DataContext = createContext<DataContextInterface | null>(null);
```

How are they different? I don't understand!😡  
Was a day of searching for solution worth it? Hell yeah! There's no way I will forget that, after all this misery.

## Dependencies

- Axios - was used to fetch api.
- React-Hook-Form - was used to get the input data.
- mapbox-gl - for map rendering.

## Languages and Tools

- React
- Typescript
- Scss
- Netlify

## API Used

- [IP Geolocation API](https://geo.ipify.org/)
  By using this api, you'll be able to fetch the physical location of a given IP address.
  Here's the json it returns:

```js
{
    "ip": "8.8.8.8",
    "location": {
        "country": "US",
        "region": "California",
        "city": "Mountain View",
        "lat": 37.40599,
        "lng": -122.078514,
        "postalCode": "94043",
        "timezone": "-07:00",
        "geonameId": 5375481
    },
    "domains": [
        "0d2.net",
        "003725.com",
        "0f6.b0094c.cn",
        "007515.com",
        "0guhi.jocose.cn"
    ],
    "as": {
        "asn": 15169,
        "name": "Google LLC",
        "route": "8.8.8.0/24",
        "domain": "https://about.google/intl/en/",
        "type": "Content"
    },
    "isp": "Google LLC",
    "proxy": {
        "proxy": false,
        "vpn": false,
        "tor": false
    },
}
```

## Installation

1. Clone the repo

```sh
git clone https://github.com/theCodingJohn/ip-address-tracker.git
```

2. Change directory

```sh
cd ip-address-tracker
```

3. Install dependencies

```sh
yarn install
```

3. Start the project

```sh
yarn start
```
