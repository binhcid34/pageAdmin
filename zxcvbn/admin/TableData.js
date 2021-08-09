import React, { Component } from 'react'
import './style.css'
import logo from './images/logo.png'
import avatar2 from './images/avatar2.png'
import avatar3 from './images/avatar3.png'
import avatar4 from './images/avatar4.png'
import admin from './images/admin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faEnvelope, faPowerOff, faShoppingCart, faTable, faTh, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons'


export default class TableData extends Component {

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
                  <h1 className="main-title float-left">DataTables</h1>
                  <ol className="breadcrumb float-right">
                    <li className="breadcrumb-item">Home</li>
                    <li className="breadcrumb-item active">DataTables</li>
                  </ol>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            {/* end row */}
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="card mb-3">
                  <div className="card-header">
                    <h3><i className="fas fa-table" /> Basic data table</h3>
                    DataTables is a plug-in for the jQuery Javascript library. It is a highly flexible tool, based upon the foundations of progressive enhancement, and will add advanced interaction controls to any HTML table: pagination, instant search and multi-column ordering.
                    <a target="_blank" href="https://datatables.net/">(more details)</a>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table id="dataTable" className="table table-bordered table-hover display" style={{width: '100%'}}>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Date</th>
                            <th>Salary</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    {/* end table-responsive*/}
                  </div>
                  {/* end card-body*/}
                </div>
                {/* end card*/}
              </div>
            </div>
            {/* end row*/}
          </div>
          {/* END container-fluid */}
        </div>
        {/* END content */}
      </div>
      </div>
        )
    }
}
