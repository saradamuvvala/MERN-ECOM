import React from 'react'

import '../../App.css'
function Header() {
  return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid row">
    <a className="navbar-brand col-2" href="#">Reyan Store</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse col-8" id="navbarSupportedContent">
         <form className="d-flex" role="search">
           <input className="form-control me-2 myinput" type="search" placeholder="Search Products" aria-label="Search"/>
           <button className="btn btn-outline-success" type="submit">Search</button>
         </form>
        
         <div className='col-2 mx-auto'>
             <ul className="navbar-nav me-auto mb-2 my-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Cart</a>
        </li>

        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </a>

              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Orders</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
              </ul>
         </li>
         <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
         </li>
         
      </ul>
        </div>
   </div>
   </div>
</nav>
  )
}

export default Header
