import React, { createContext, useState } from 'react'
import {DataContextInteface, ChildrenProps, UserDataInteface} from "../types"

export const DataContext = createContext<DataContextInteface  | null>(null);

export const DataProvider = ({ children }: ChildrenProps) => {
  const [userData, setUserData] = useState<UserDataInteface | null>(null);

  return (
    <DataContext.Provider value={{userData, setUserData}}>
      {children}
    </DataContext.Provider>
  )
}