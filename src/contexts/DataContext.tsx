import React, { createContext, useState, useContext } from 'react'
import {DataContextInterface, ChildrenProps, UserDataInterface, IpInterface} from "../types"

export const DataContext = createContext({} as DataContextInterface);

export const DataProvider = ({ children }: ChildrenProps) => {
  const [userData, setUserData] = useState<UserDataInterface | null>(null);

  const [searchedIp, setSearchedIp] = useState<IpInterface | null>(null);

  const value: DataContextInterface = { userData, setUserData, searchedIp, setSearchedIp };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export const useDataContext = () => useContext(DataContext);