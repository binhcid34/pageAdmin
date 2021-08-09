import React, { Component } from 'react'
import './style.css'
import logo from './images/logo.png'
import avatar2 from './images/avatar2.png'
import avatar3 from './images/avatar3.png'
import avatar4 from './images/avatar4.png'
import admin from './images/admin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faBoxOpen, faEnvelope, faPowerOff, faShoppingCart, faTable, faTh, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'


export default class ContentHome extends Component {
  constructor(props) {
    super(props);
    this.state = (
      {
        users:{
        },
        products:[],
        orders:{

        },
        message:{
          
        }
      }

    )
  }
  componentDidMount(){
    axios.get('http://localhost:7000/getTotalUser').then(res => {
      this.setState({users: res.data[0]});
    });
    axios.get('http://localhost:7000/getTotalProduct').then(res => {
      this.setState({products: res.data[0]});
    })
    axios.get('http://localhost:7000/getTotalOrder').then(res => {
      this.setState({orders:res.data[0]});
    })
    console.log(this.state.users);
  }
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
                        
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                  {/* end row */}
                  <div className="row">
                    <div className="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                      <div className="card-box noradius noborder bg-danger">
                        <span className="far fauser float-right text-white">
                          <FontAwesomeIcon icon ={faUser} size = "6x"/>
                        </span>
                        <h6 className="text-white text-uppercase m-b-20">Users</h6>
                        <h1 className="m-b-20 text-white counter">{this.state.users.users}</h1>
                        <span className="text-white">12 today </span>
                      </div>
                    </div>
                    <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                            <div class="card-box noradius noborder bg-purple">
                                <span class="fas fa-boxopen float-right text-white">
                                  <FontAwesomeIcon icon ={faBoxOpen} size ="6x" />
                                </span>
                                <h6 class="text-white text-uppercase m-b-20">New Products</h6>
                                <h1 class="m-b-20 text-white counter">{this.state.products.products}</h1>
                                <span class="text-white">12 Today</span>
                            </div>
                        </div>
                    <div className="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                      <div className="card-box noradius noborder bg-warning">
                        <span className="fas fa-shoppingcart float-right text-white">
                          <FontAwesomeIcon icon ={faShoppingCart} size ="6x" />
                        </span>
                        <h6 className="text-white text-uppercase m-b-20">Orders</h6>
                        <h1 className="m-b-20 text-white counter">{this.state.orders.orders}</h1>
                        <span className="text-white">25 Today</span>
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                      <div className="card-box noradius noborder bg-info">
                        <span className="far faenvelope float-right text-white">
                          <FontAwesomeIcon icon ={faEnvelope} size ="6x"/>
                        </span>
                        <h6 className="text-white text-uppercase m-b-20">Messages</h6>
                        <h1 className="m-b-20 text-white counter">{this.state.users.so_thongbao}</h1>
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
