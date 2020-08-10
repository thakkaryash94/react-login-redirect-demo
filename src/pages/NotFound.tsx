import React, { useEffect, Fragment } from 'react'
import { useNavigate, RouteComponentProps } from "@reach/router"

function NotFound(props: RouteComponentProps) {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  }, [navigate])

  return (
    <Fragment />
  )
}

export default NotFound
