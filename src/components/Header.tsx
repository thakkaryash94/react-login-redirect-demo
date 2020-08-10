import React from 'react'
import { Link, RouteComponentProps } from '@reach/router'

function Header(props: RouteComponentProps) {
  return (
    <nav>
      <Link to='dashboard'>Dashboard</Link>{" | "}
      <Link to='settings'>settings</Link>{" | "}
      <Link to='logout'>Logout</Link>
    </nav>
  )
}

export default Header
