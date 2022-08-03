import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import TabComponent from '../components/TabComponent'
import {StyleRoot} from 'radium'


class Main extends Component {
    render() {
        return (
            <StyleRoot>
                <div>
                <Header />
                {/* <Footer/> */}
                </div>
            </StyleRoot>
        )
    }
}


export default Main