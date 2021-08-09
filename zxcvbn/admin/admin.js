import React, { Component } from 'react'
import ContentHome from './ContenHome'
import MainSlider from './MainSlider'
import Footer from './Footer'
import Barchat from './Barchat'
import BasicTable from './BasicTable'
export default class admin extends Component {
    render() {
        return (
            <div>
                <MainSlider/>
                <ContentHome/>
                <Barchat/>
                <BasicTable/>
                <Footer/>
            </div>
        )
    }
}
