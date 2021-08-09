import { faBook, faFile, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import MainSlider from './MainSlider'
import ContentHome from './ContenHome'
export default class User extends Component {
    render() {
        return (
            <div>
                <MainSlider/>
              <div className = "content-page">
                <div className ="content">
                  <div class = "row">
                    <div className ="col-xs-12 col-md-12 col-lg-12 col-xl-12">
                      <div className = "card mb-3">
                      <div>
                 <div class="Personal">
                <div class="Personal__main">
                    <div class="Personal__main-left">
                        <div class="profile">
                            <div>
                                <img src="data:image/jpeg;base64,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"
                                    alt="Admin" class="rounded-circle" width="134" />
                                <div class="thongtin">
                                    <h2>Lê Văn Chương</h2>
                                    <div class="danhgia">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h5><FontAwesomeIcon icon = {faBook}/> Education </h5>
                                <div>
                                    <p>B.S. in Computer Science from the University Knoxville</p>
                                </div>
                                <h5><FontAwesomeIcon icon = {faFileAlt}/> Note</h5>
                                <p>sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse</p>
                            </div>
                        </div>
                    </div>
                    <div class="Personal__main-right">
                        <div class="card">
                            <div class="card__row">
                                <div class="col-sm-3">
                                    <h4 class="mb-0"><i class="far fa-envelope"></i> &nbsp;Email</h4>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    Nhoctrum03022001@gmail.com
                                </div>
                            </div>
                            <hr />
                            <div class="card__row">
                                <div class="col-sm-3">
                                    <h4 class="mb-0"><i class="fas fa-phone"></i>&nbsp;Phone</h4>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    (239) 816-9029
                                </div>
                            </div>
                            <hr />
                            <div class="card__row">
                                <div class="col-sm-3">
                                    <h4 class="mb-0"><i class="fas fa-map-marker-alt"></i>&nbsp;Location</h4>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    Ho Chi Minh city, VietNam
                                </div>
                            </div>
                            <hr />
                            <div class="card__row">
                                <div class="col-sm-3">
                                    <h4 class="mb-0"><i class="fas fa-user-plus"></i>&nbsp;Folowers</h4>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    10
                                </div>
                            </div>
                            <hr />
                            <div class="card__row">
                                <div class="col-sm-3">
                                    <h4 class="mb-0"><i class="far fa-calendar-alt"></i>&nbsp;Join Date</h4>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    30/4/2020
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
        )
    }
}
