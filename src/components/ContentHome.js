import React, { Component } from 'react'
import './style.css'
import logo from './images/logo.png'
import avatar2 from './images/avatar2.png'
import avatar3 from './images/avatar3.png'
import avatar4 from './images/avatar4.png'
import admin from './images/admin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faBoxOpen, faEnvelope, faPowerOff, faShoppingCart, faTable, faTh, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons'


export default class ContentHome extends Component {
    render() {
        return (
            <div>
                <div className="content-page">
              {/* Start content */}
              <div className="content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="breadcrumb-holder">
                        <h1 className="main-title float-left">Dashboard</h1>
                        <ol className="breadcrumb float-right">
                          <li className="breadcrumb-item">Home</li>
                          <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                  {/* end row */}
                  <div className="row">
                    <div className="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                      <div className="card-box noradius noborder bg-danger">
                        <span className="far fa-user float-right text-white">
                          <FontAwesomeIcon icon ={faUser} size = "6x"/>
                        </span>
                        <h6 className="text-white text-uppercase m-b-20">Users</h6>
                        <h1 className="m-b-20 text-white counter">487</h1>
                        <span className="text-white">12 Today</span>
                      </div>
                    </div>
                    <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                            <div class="card-box noradius noborder bg-purple">
                                <span class="fas fa-download float-right text-white">
                                  <FontAwesomeIcon icon ={faBoxOpen} size ="6x" />
                                </span>
                                <h6 class="text-white text-uppercase m-b-20">New Products</h6>
                                <h1 class="m-b-20 text-white counter">290</h1>
                                <span class="text-white">12 Today</span>
                            </div>
                        </div>
                    <div className="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                      <div className="card-box noradius noborder bg-warning">
                        <span className="fas fa-shopping-cart float-right text-white">
                          <FontAwesomeIcon icon ={faShoppingCart} size ="6x" />
                        </span>
                        <h6 className="text-white text-uppercase m-b-20">Orders</h6>
                        <h1 className="m-b-20 text-white counter">320</h1>
                        <span className="text-white">25 Today</span>
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                      <div className="card-box noradius noborder bg-info">
                        <span className="far fa-envelope float-right text-white">
                          <FontAwesomeIcon icon ={faEnvelope} size ="6x"/>
                        </span>
                        <h6 className="text-white text-uppercase m-b-20">Messages</h6>
                        <h1 className="m-b-20 text-white counter">58</h1>
                        <span className="text-white">5 New</span>
                      </div>
                    </div>
                  </div>
                  {/* end row */}
                </div>
              </div>
              {/* end row*/}
            </div>
            {/* END container-fluid */}
            </div>
        )
    }
}
