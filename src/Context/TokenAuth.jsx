import React, { createContext, useState } from 'react'
export const tokenAuthorisationContext = createContext()

function TokenAuth({children}) {
    const [isAuthorized,setIsAuthorized] = useState(false)
  return (
    <>
        <tokenAuthorisationContext.Provider value={{isAuthorized,setIsAuthorized}}>
            {children}
        </tokenAuthorisationContext.Provider>
    </>
  )
}

export default TokenAuth