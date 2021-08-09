import React, { Component } from 'react'
import BasicTable from './BasicTable'
import MainSlider from './MainSlider'
import ProductTable from './ProductTable'

export default class table extends Component {
    render() {
        return (
            <div>
                <MainSlider/>
                <BasicTable/>
                <ProductTable/>
            </div>
        )
    }
}
