import { faChartBar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { Component } from 'react'
import { Bar, Line , Pie} from 'react-chartjs-2'
import './style.css'
export default class Barchat extends Component {
    constructor(props) {
        super(props);
        this.state = (
            {
                Timelines:{
                },
                TimelinesFeb:{
                },
                TimelinesMar:{
                },
                TimelinesApr:{
                },
                TimelinesMay:{
                },
                TimelinesJun:{
                },
                TimelinesJul:{
                },
                TimelinesAug:{
                },
                

                TimelinesOrder:{
                },
                TimelinesOrderFeb:{
                },
                TimelinesOrderMar:{
                },
                TimelinesOrderApr:{
                },
                TimelinesOrderMay:{
                },
                TimelinesOrderJun:{
                },
                TimelinesOrderJul:{
                },
                TimelinesOrderAug:{
                },

                users:{
                },
                products:[],
                orders:{
                },
                message:{ 
                },
                binh_luan:{
                },
                chat:{}

            }
        )
    }

    componentDidMount() {
        // product
        axios.get('http://localhost:7000/getTime').then(res => {
            this.setState({Timelines: res.data[0]});
        })
        axios.get('http://localhost:7000/getTimeFeb').then(res => {
            this.setState({TimelinesFeb: res.data[0]});
        })
        
        axios.get('http://localhost:7000/getTimeMar').then(res => {
            this.setState({TimelinesMar: res.data[0]});
        })
        
        axios.get('http://localhost:7000/getTimeApr').then(res => {
            this.setState({TimelinesApr: res.data[0]});
        })
        
        axios.get('http://localhost:7000/getTimeMay').then(res => {
            this.setState({TimelinesMay: res.data[0]});
        })
        
        axios.get('http://localhost:7000/getTimeJun').then(res => {
            this.setState({TimelinesJun: res.data[0]});
        })
        
        axios.get('http://localhost:7000/getTimeJul').then(res => {
            this.setState({TimelinesJul: res.data[0]});
        })
        axios.get('http://localhost:7000/getTimeAug').then(res => {
            this.setState({TimelinesAug: res.data[0]});
        })
        
        // order
        axios.get('http://localhost:7000/getTimeOrder').then(res => {
            this.setState({TimelinesOrder: res.data[0]});
        })
        axios.get('http://localhost:7000/getTimeOrderFeb').then(res => {
            this.setState({TimelinesOrderFeb: res.data[0]});
        })
        
        axios.get('http://localhost:7000/getTimeOrderMar').then(res => {
            this.setState({TimelinesOrderMar: res.data[0]});
        })
        
        axios.get('http://localhost:7000/getTimeOrderApr').then(res => {
            this.setState({TimelinesOrderApr: res.data[0]});
        })
        
        axios.get('http://localhost:7000/getTimeOrderMay').then(res => {
            this.setState({TimelinesOrderMay: res.data[0]});
        })
        
        axios.get('http://localhost:7000/getTimeOrderJun').then(res => {
            this.setState({TimelinesOrderJun: res.data[0]});
        })
        
        axios.get('http://localhost:7000/getTimeOrderJul').then(res => {
            this.setState({TimelinesOrderJul: res.data[0]});
        })
        axios.get('http://localhost:7000/getTimeOrderAug').then(res => {
            this.setState({TimelinesOrderAug: res.data[0]});
        })

        //counter
        axios.get('http://localhost:7000/getTotalUser').then(res => {
            this.setState({users: res.data[0]});
          });
        axios.get('http://localhost:7000/getTotalProduct').then(res => {
            this.setState({products: res.data[0]});
          })
        axios.get('http://localhost:7000/getTotalOrder').then(res => {
            this.setState({orders:res.data[0]});
          })
        axios.get('http://localhost:7000/getTotalBinhluan').then(res => {
            this.setState({binh_luan:res.data[0]});
          })
        axios.get('http://localhost:7000/getTotalChat').then(res => {
            this.setState({chat:res.data[0]});
          })

        console.log(this.state.chat.chat);  
    }

    render() {
        return (
            <div>
                <div class="content-page">
                    <div class="content">
                        <div class="container-fluid">
                            
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <div class="card mb-3">
                                        <div class="card-header">
                                           <FontAwesomeIcon icon = {faChartBar} /> Line Chart
                                        </div>

                                        <div class="card-body">
                                            <Line
                                                data ={{
                                                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                                                    datasets: [{
                                                        label: 'Amount Products / Month - 2021',
                                                        data: [this.state.Timelines.jan, this.state.TimelinesFeb.jan, this.state.TimelinesMar.jan,
                                                            this.state.TimelinesApr.jan,
                                                            this.state.TimelinesMay.jan,
                                                            this.state.TimelinesJun.jan,
                                                            this.state.TimelinesJul.jan,
                                                            this.state.TimelinesAug.jan
                                                        ],
                                                        backgroundColor: [
                                                            
                                                            'rgba(255, 159, 64, 0.2)'				
                                                        ],
                                                        borderColor: [
                                                          
                                                            'rgba(255, 159, 64, 1)'
                                                        ],
                                                        borderWidth: 3
                                                    },
                                                    {
                                                        label: 'Amount Orders / Month - 2021',
                                                        data: [this.state.TimelinesOrder.jan, this.state.TimelinesOrderFeb.jan, this.state.TimelinesOrderMar.jan,
                                                            this.state.TimelinesOrderApr.jan,
                                                            this.state.TimelinesOrderMay.jan,
                                                            this.state.TimelinesOrderJun.jan,
                                                            this.state.TimelinesOrderJul.jan,
                                                            this.state.TimelinesOrderAug.jan
                                                        ],
                                                        backgroundColor: [
                                                            'rgba(54, 162, 235, 0.2)',
                                                         			
                                                        ],
                                                        borderColor: [
                                                            
                                                            'rgba(75, 192, 192, 1)'
                                                            
                                                        ],
                                                        borderWidth: 3
                                                    }
                                                ]
                                                }}
                                                width={100}
                                                height={50}
                                                options= {{
                                                    scales: {
                                                        yAxes: [{
                                                            ticks: {
                                                                beginAtZero:true
                                                            }
                                                        }]
                                                    }
                                                }}
                                        />
                                        </div>
                                        <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                                     </div>
                                </div>

                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <div class="card mb-3">
                                        <div class="card-header">
                                        <FontAwesomeIcon icon = {faChartBar} /> Pie Chart
                                        </div>

                                    <div class="card-body">
                                    <Bar
                                            data={{
                                                labels: ['Users', 'Products', 'Orders', 'Thông báo', 'Comments', 'Chat'],
                                                datasets: [{
                                                    label: '# of Votes',
                                                    data: [this.state.users.users,
                                                           this.state.products.products,
                                                           this.state.orders.orders,
                                                           this.state.users.so_thongbao,
                                                           this.state.binh_luan.comments,
                                                           this.state.chat.chat 
                                                    ],
                                                    backgroundColor: [
                                                        'rgba(255, 99, 132, 0.2)',
                                                        'rgba(54, 162, 235, 0.2)',
                                                        'rgba(255, 206, 86, 0.2)',
                                                        'rgba(75, 192, 192, 0.2)',
                                                        'rgba(153, 102, 255, 0.2)',
                                                        'rgba(255, 159, 64, 0.2)'
                                                    ],
                                                    borderColor: [
                                                        'rgba(255, 99, 132, 1)',
                                                        'rgba(54, 162, 235, 1)',
                                                        'rgba(255, 206, 86, 1)',
                                                        'rgba(75, 192, 192, 1)',
                                                        'rgba(153, 102, 255, 1)',
                                                        'rgba(255, 159, 64, 1)'
                                                    ],
                                                    borderWidth: 2
                                                }]
                                            }}
                                            width={100}
                                            height={50}
                                            options={{ 
                                                scales: {
                                                    y: {
                                                        beginAtZero: true
                                                    }
                                                }
                                            }}
                                    />
                                    </div>
                                    <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
