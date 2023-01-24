import React from 'react'
import {NavLink} from 'react-router-dom'

function Pnf() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
            <h1 className="display-3 text-danger">requested path not found</h1>
            <h1 className="display-3 text-danger">404 error</h1>
            <NavLink to={'/'} className="btn btn-outline-warning">Back to home page</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Pnf
