import React, { Component } from 'react'
import './style.css'
import logo from './images/logo.png'
import avatar2 from './images/avatar2.png'
import avatar3 from './images/avatar3.png'
import avatar4 from './images/avatar4.png'
import admin from './images/admin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown, faBars, faBell, faEnvelope, faPowerOff, faShoppingCart, faTable, faTh, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export default class MainSlider extends Component {
    render() {
        return (
            <div id="main">
            <div className="headerbar"> 
              <div className="headerbar-left">
                <Link to = '/admin' className="logo">
                  <img alt="Logo" src={logo} />
                  <span>Admin Shop</span>
                </Link>
              </div>
              <nav className="navbar-custom">
                <ul className="list-inline float-right mb-0">
                  <li className="list-inline-item dropdown notif">
                    <a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" aria-haspopup="false" aria-expanded="false"> 
                      <span>
                        <FontAwesomeIcon icon = {faEnvelope}/> 
                      </span>
                      <span className="notif-bullet" />
                    </a>
                  </li>
                  <li className="list-inline-item dropdown notif">
                    <a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" aria-haspopup="false" aria-expanded="false">
                      <FontAwesomeIcon icon = {faBell}/>
                      <span className="notif-bullet" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-arrow-success dropdown-lg">
                      {/* item*/}
                      <div className="dropdown-item noti-title">
                        <h5>
                          <small>
                            <span className="label label-danger pull-xs-right">5</span>Allerts</small>
                        </h5>
                      </div>
                      {/* item*/}
                      <a href="#" className="dropdown-item notify-item">
                        <div className="notify-icon bg-faded">
                          <img src= {avatar2} alt="img" className="rounded-circle img-fluid" />
                        </div>
                        <p className="notify-details">
                          <b>John Doe</b>
                          <span>User registration</span>
                          <small className="text-muted">3 minutes ago</small>
                        </p>
                      </a>
                      {/* item*/}
                      <a href="#" className="dropdown-item notify-item">
                        <div className="notify-icon bg-faded">
                          <img src={avatar3} alt="img" className="rounded-circle img-fluid" />
                        </div>
                        <p className="notify-details">
                          <b>Michael Cox</b>
                          <span>Task 2 completed</span>
                          <small className="text-muted">12 minutes ago</small>
                        </p>
                      </a>
                      {/* item*/}
                      <a href="#" className="dropdown-item notify-item">
                        <div className="notify-icon bg-faded">
                          <img src= {avatar4} alt="img" className="rounded-circle img-fluid" />
                        </div>
                        <p className="notify-details">
                          <b>Michelle Dolores</b>
                          <span>New job completed</span>
                          <small className="text-muted">35 minutes ago</small>
                        </p>
                      </a>
                      {/* All*/}
                      <a href="#" className="dropdown-item notify-item notify-all">
                        View All Allerts
                      </a>
                    </div>
                  </li>
                  <li className="list-inline-item dropdown notif">
                    <a className="nav-link dropdown-toggle nav-user" data-toggle="dropdown" href="#" aria-haspopup="false" aria-expanded="false">
                      <img src={admin} alt="Profile image" className="avatar-rounded" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                      {/* item*/}
                      <div className="dropdown-item noti-title">
                        <h5 className="text-overflow">
                          <small>Hello, admin</small>
                        </h5>
                      </div>
                      {/* item*/}
                      <a href="profile.html" className="dropdown-item notify-item">
                        <FontAwesomeIcon icon ={faUser}/>
                        <span>Profile</span>
                      </a>
                      {/* item*/}
                      <a href="#" className="dropdown-item notify-item">
                        <FontAwesomeIcon icon ={faPowerOff}/>
                        <span>Logout</span>
                      </a>
                    </div>
                  </li>   
                </ul>
                <ul className="list-inline menu-left mb-0">
                  <li className="float-left">
                    <button className="button-menu-mobile open-left">
                      <FontAwesomeIcon icon ={faBars}/>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            {/* End Navigation */}
            {/* Left Sidebar */}
            <div className="left main-sidebar">
              <div className="sidebar-inner leftscroll">
                <div id="sidebar-menu">
                  <ul>
                    <li className="submenu">
                      <Link className="active" to = '/admin'>
                        <FontAwesomeIcon icon ={faBars}/>
                        <span> Dashboard </span>
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link to = '/UserAdmin'>
                        <FontAwesomeIcon icon ={faUser}/>
                        <span> Users </span>
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link  to ='/datatable'>
                        <FontAwesomeIcon icon = {faTable}/>
                        <span> Tables </span>
          
                      </Link>
                      <ul className="list-unstyled">
                        <li>
                          <a href="tables-datatable.html">Data Tables</a>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link to = '/home'>
                        <FontAwesomeIcon icon ={faTh}/>
                        <span> Shop</span>
                      </Link>
                    </li>
                  </ul>
                  <div className="clearfix" />
                </div>
                <div className="clearfix" />
              </div>
            </div>
            {/* End Sidebar */}
            
            
          </div>
          
        )
    }
}
