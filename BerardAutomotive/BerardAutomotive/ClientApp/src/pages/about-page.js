import React from 'react';
import { Container, Divider, Header } from 'semantic-ui-react'
import pic1 from '../pictures/pic1.jpg'
import pic2 from '../pictures/pic2.jpg'
import pic3 from '../pictures/pic3.jpg'

const AboutPage = () => {
    return (
        <>
            <div >
                <Container className='about'>
                    <Divider horizontal>
                        <Header as='h2'>
                            Brief History
                        </Header>
                    </Divider>

                    <p text-align='right' style={{ 'textAlign': 'left' }}>
                        Owner and operator Mike Levytskyi has been working in the
                        automotive field since 2010. Started acquiring ASE certifications
                        in 2005 while working at Firestone, in the fields of Engine Repair,
                        Automatic Transmission/Transaxle, Manual Drivetrain and Axles,
                        Suspension and Steering, Brakes, Electrical/ Electronic Systems,
                        Heating and A/C, and Engine Performance. Taking and passing all 8
                        tests allows Mike to be Master Certified in Automotive Repair. A
                        large number of years Mike worked at Efficient Transmission in
                        Mandeville, LA. In 2005, Mike decided to venture out on his own and
                        opened Mike’s Automotive in the Old Mandeville section of town.
                        In business for over 5 years, this shop has become quite a reliable
                        fixture in Old Mandeville area. Family oriented, reliable service,
                        fair pricing, quality work, are just a few things that the people
                        of St. Tammany have come to know about Mike’s Automotive.
                    </p>

                    <Divider horizontal>
                        <Header as='h2'>
                            Our Automotive Family
                        </Header>
                    </Divider>
                </Container>
            </div>

            <div className='aboutTwo'>

                <div className='pic1'>
                    <p style={{ float: "left" }}><img src={pic3} height="200px" width="250px" hspace="20" alt="" /></p>
                    <p> Matthew Ryan -  Matt has extensive experience in maintenance, repair, service, machinery, and equipment. He has an extensive background in welding and fabrication. Matt is a very motivated and ambitious worker and has developed quite a following with our customers!</p>
                </div>

                <div className="pic2">
                    <div style={{ clear: "left" }}>
                        <p style={{ float: "left" }}><img src={pic1} height="200" width="250" border="1px" hspace="20" alt="" /></p>
                        <p>Mark MacTurk -  Mark is a Service Technician. He has been in the automotive business for over 15 years. Mark is an ASE Certified Master Technician in all areas of automotive repair, specializing in Light Diesel Repair, Alternative Fuels and Smog Inspection.</p>
                    </div>
                </div>

                <div className="pic3">
                    <div style={{ clear: "left" }}>
                        <p style={{ float: "left" }}><img src={pic2} height="200" width="250" border="1px" hspace="20" alt="" /></p>
                        <p>Donnie Tyson - Don is an ASE Certified Master Technician in all areas of automotive repair, specializing in everything to do with passenger cars and light truck diagnostics and repair. He is best known as one of the top technicians in the area by once winning the AC Delco “Top Shop Shoot Out” Diagnostics competition for the western 13 states.</p>
                    </div>
                </div>

            </div>
        </>

    )

}

export default AboutPage;