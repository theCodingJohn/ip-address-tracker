// import React, { createContext, useState } from 'react'

// interface UserData {
//     "ip": string,
//     "location": {
//         "country": string,
//         "region": string,
//         "city": string,
//         "lat": number,
//         "lng": number,
//         "postalCode": string,
//         "timezone": string,
//         "geonameId": number
//     },
//     "domains": string[],
//     "as": {
//         "asn": number,
//         "name": string,
//         "route": string,
//         "domain": string,
//         "type": string
//     },
//     "isp": string,
//     "proxy": {
//         "proxy": boolean,
//         "vpn": boolean,
//         "tor": boolean
//     }
// }

// interface UserDataContext {
//   "userData": UserData;
//   setUserData: () => void;
// }

// export const DataContext = createContext<UserData | null | undefined>(null);

// export const DataProvider: React.FC = ({ children }) => {
//   const [userData, setUserData] = useState<UserDataContext | null | undefined>({});
  
//   return (
//     <DataContext.Provider value={{userData, setUserData }}>
//       {children}
//     </DataContext.Provider>
//   )
// }