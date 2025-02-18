import React from 'react'
import {Link} from 'react-router'

function Navbar() {
  return (
    <div>
      <ul>
        <li><Link to="/pets/create">Create New Pet</Link></li>
        <li><Link to="/pets">All Pets</Link></li>
      </ul>
    </div>
  )
}

export default Navbar