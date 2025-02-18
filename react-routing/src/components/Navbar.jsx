import React from 'react'
import {Link} from 'react-router'

function Navbar() {
    // exercise 2:
    // create a Homepage component that has h1 that says Welcome
    // add the link to it in the Navbar.jsx
  return (
    <div>
      <ul>
        {/* linking in React application */}
        <li><Link to="/students">All Students</Link></li>
        <li><Link to="/">Homepage</Link></li>

      </ul>
    </div>
  )
}

export default Navbar
