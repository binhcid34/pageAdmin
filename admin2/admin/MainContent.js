import React, { Component } from 'react'
import './admin.css'
import Chart from './Chart'
import PieChart from './PieChart'
import axios from 'axios'
export default class MainContent extends Component {
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
    });
    axios.get('http://localhost:7000/getTotalOrder').then(res => {
      this.setState({orders:res.data[0]});
    });
    console.log(this.state.users);
  }
    render() {
        return (
            <div>
                <div>
                <div className="main-content">
        <header>
         
        </header>
        <main>
          <div className="dash-cards">
            <div className="card-single">
              <div className="card-body">
                <i className="fas fa-user" />
                <div>
                  <h4>Tài khoản người dùng</h4>
                  <h4>{this.state.users.users}</h4>
                </div>
              </div>
            </div>
            <div className="card-single">
              <div className="card-body">
                <i className="fas fa-box-open" />
                <div>
                  <h4>Sản phẩm</h4>
                  <h4>{this.state.products.products}</h4>
                </div>
              </div>
            </div>
            <div className="card-single">
              <div className="card-body">
                <i className="far fa-handshake" />
                <div>
                  <h4>Số giao dịch</h4>
                  <h4>{this.state.orders.orders}</h4>
                </div>
              </div>
            </div>
          </div>
          <div class='chart'>
                        <div>
                                <Chart/>
                            
                        </div>
                        <div>
                            <PieChart/>
                        </div>
                    </div>
        </main></div>

                </div>
            </div>
        )
    }
}
