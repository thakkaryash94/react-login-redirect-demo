import React, { useEffect, ReactNode } from 'react'
import { useLocation, useNavigate, RouteComponentProps } from "@reach/router"
import Cookies from 'js-cookie'
import Header from './Header'

interface GuardedRoutesProps extends RouteComponentProps {
  children?: ReactNode
}

function GuardedRoutes(props: GuardedRoutesProps) {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const token = Cookies.get('token')
    if (token === undefined) {
      navigate(`/login?redirect=${location.pathname}`)
    }
  })
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}

export default GuardedRoutes
