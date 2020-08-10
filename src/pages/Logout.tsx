import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate, RouteComponentProps } from "@reach/router"

function Login(props: RouteComponentProps) {
  const navigate = useNavigate()

  useEffect(() => {
    const token = Cookies.get('token')
    if (token) {
      Cookies.remove('token')
    }
    setTimeout(() => {
      navigate(`/`)
    }, 500)
  }, [navigate])

  return (
    <>
    </>
  )
}

export default Login
