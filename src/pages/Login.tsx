import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate, useLocation, RouteComponentProps } from "@reach/router"

function Login(props: RouteComponentProps) {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const token = Cookies.get('token')
    if (token !== undefined) {
      navigate(`/dashboard`)
    }
  }, [navigate, location])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    Cookies.set('token', 'dummyToken')
    const searchParams = new URLSearchParams(location.search)
    if (searchParams.has('redirect')) {
      navigate(searchParams.get('redirect')!!)
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        username: <input type="text" key="username" />
        <br />
        <br />
        password: <input type="password" key="password" />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login