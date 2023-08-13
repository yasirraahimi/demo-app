import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
 

  // const [myStyle, setmyStyle] = useState({
  //   color: 'white',
  //   backgroundColor: 'black'

  // })

  // const darkFun = () => {
  //   if (myStyle.color == 'white') {
  //     setmyStyle({

  //       color: 'black',
  //       backgroundColor: 'white'

  //     }
  //     )
  //   }
  //   else if (myStyle.color == 'black') {
  //     setmyStyle({

  //       color: 'white',
  //       backgroundColor: 'black'

  //     }
  //     )
  //   }
  // }


  return (

    <nav className={`navbar navbar-expand-lg bg-${props.mode}` }>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className={`navbar-brand text-${props.mode1}`} href="/">{props.title}</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link active text-${props.mode1}` }aria-current="page" href="#" >Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link active text-${props.mode1}` } href="#" >About</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link active text-${props.mode1}` }>Contact</a>
            </li>
          </ul>
          <div className="form-check form-switch">
  <input className="form-check-input mx-3 p-2 my-2" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="text-white bg-dark rounded-pill mx-3 p-2" htmlFor="flexSwitchCheckDefault" >Dark Mode</label>
</div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>


  )
}

Navbar.propTypes = {
  title: PropTypes.string
}
Navbar.defaultProps = {
  title: 'Set Title here'
}

