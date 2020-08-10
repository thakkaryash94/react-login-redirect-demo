import React, { Fragment } from 'react'
import { RouteComponentProps, useNavigate } from '@reach/router'
import Cookies from 'js-cookie'

function Home(props: RouteComponentProps) {
  const navigate = useNavigate()
  const token = Cookies.get('token')
  return (
    <Fragment>
      <h1>Home</h1>
      {token ? <Fragment /> : <button onClick={(_) => navigate('/login')}>Login</button>}
    </Fragment>
  )
}

export default Home
