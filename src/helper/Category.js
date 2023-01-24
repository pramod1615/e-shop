import React from 'react'
import { NavLink } from 'react-router-dom'

function category(props) {
  return (
    <div className="col-md-3 col-sm-6 mt-2 mb-2 text-center">
        <div className="card">
            <div className="card-body bg-success text-white text-wrap">
                <NavLink to={`/products/${props.value}`} className="btn">{props.value}</NavLink>
            </div>
        </div>
    </div>
  )
}

export default category
