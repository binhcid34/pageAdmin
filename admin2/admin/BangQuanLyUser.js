import React, { Component } from 'react'
import MainSlider from './MainSlider'
import UserData from './UserData'

export default class BangQuanLyUser extends Component {
    render() {
        return (
            <div className = "Admin">
                <MainSlider/>
                <UserData/>
            </div>
        )
    }
}
