import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import TabComponent from '../components/TabComponent'


class Main extends Component {
    render() {
        return (
            <div>
             <Header />
                <Section/>
                <TabComponent />
             <Footer/>
            </div>
        )
    }
}


export default Main