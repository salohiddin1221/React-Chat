import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../util/const'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

function AppRouter() {

    const [user] = useAuthState(auth)

    return user ? (
        <Routes>
            {
                privateRoutes.map(({ path, component }) => { 
                    return <Route key={path} path={path} element={component}  />
                })
            }
            <Route path="*" element={<Navigate to={CHAT_ROUTE} />} />
           
        </Routes>
    ) : (
            <Routes>
             {
                publicRoutes.map(({ path, component }) => { 
                    return <Route key={path} path={path} element={component}  />
                })
            }
            <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
            </Routes>
  )
}

export default AppRouter