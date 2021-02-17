import React, { Component } from 'react'
import auto1 from '../pictures/auto1.jpg'
import auto2 from '../pictures/auto2.jpg'
import auto3 from '../pictures/auto3.jpg'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';

class MainPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-blockw-100"
                            src={auto1}
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-blockw-100"
                            src={auto2}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-blockw-100"
                            src={auto3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

                <div className="HomeInfo">

                    <h3 style={{ "textAlign": "center", "padding": "10px" }}>What We Provide</h3>


                    <div style={{ "textAlign": "center" }}>
                        <ul style={{ "textAlign": "center", "display": "inline-block", "listStyleType": "none" }}>
                            <li> *ASE Master Certified Experts </li>
                            <li> *Warranty Guaranteed Auto Work </li>
                            <li> *Excellent Reviews From Customers </li>
                        </ul>

                        <ul style={{ "textAlign": "center", "display": "inline-block", "listStyleType": "none" }}>
                            <li> *Air / Heat Services</li>
                            <li> *Brake System Repair Services</li>
                            {/* <li>Oil Lube Services</li> */}
                            <li> *Exhaust System Services</li>
                        </ul>
                    </div>


                </div >

            </React.Fragment >
        )
    }
}

export default MainPage;