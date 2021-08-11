import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './admin.css'
export default class MainSlider extends Component {
    render() {
        return (
            <div>
                 <input type="checkbox" id="sidebar-toggle" />
        <div className="sidebar">
          <div className="sidebar-header">
            <h3 className="brand">
              <span className="ti-unlink" />
              <span>SHOPPING</span>
            </h3>
            <label htmlFor="sidebar-toggle" className="ti-menu-alt" />
          </div>
          <div className="sidebar-menu">
            <ul>
              <li>
                <a href>
                  <i className="fas fa-chart-line" />
                  <span><Link to ='/admin' >Thống kê</Link></span>
                </a>
              </li>
              <li>
                <a href>
                  <i className="fas fa-table" />
                  <span><Link to = '/ProductTable'> Bảng quản lí sản phẩm</Link></span>
                </a>
              </li>
              <li>
                <a href>
                  <i className="fas fa-user" />
                  <span><Link to = '/UserTable'>Bảng quản lý người dùng</Link></span>
                </a>
              </li>
              <li>
                <a href>
                  <i className="fab fa-shopify" />
                  <span><Link to ='/'>Cửa hàng</Link></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
            </div>
        )
    }
}
