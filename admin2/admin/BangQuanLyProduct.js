import React, { Component } from 'react'
import MainSlider from './MainSlider'
import ProductTable from './ProductTable'
import "./admin.css"
export default class BangQuanLyProduct extends Component {
    render() {
        return (
            <div className = "Admin">
                <MainSlider/>
                <ProductTable/>
            </div>
        )
    }
}
