import React, { Fragment } from 'react'
import { useNavigate, RouteComponentProps } from "@reach/router"

function NotFound(props: RouteComponentProps) {
  const navigate = useNavigate()
  return (
    <Fragment>
      <h1>Page Not Found</h1>
      <button onClick={(_) => navigate(-1)}>Go Back</button>
    </Fragment>
  )
}

export default NotFound
