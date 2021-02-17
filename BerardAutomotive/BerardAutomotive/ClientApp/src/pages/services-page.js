import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react'
import 'react-tabs/style/react-tabs.css';
import '../ServicesTab.css';
import servicesAC from '../pictures/servicesAC.jpg';
import servicesBattery from '../pictures/servicesBattery.jpg';
import servicesBrake from '../pictures/servicesBrake.jpg';
import servicesTire from '../pictures/servicesTire.jpg';


const panes = [
    {
        menuItem: 'Brake Service and Repair', render: () =>
            <Tab.Pane>
                <div className='services1'>
                    <h1 style={{ 'textAlign': 'left' }}> Brake Inspection System</h1>
                    <p style={{ 'textAlign': 'left', 'float': 'left', 'display': 'inline-block' }}><img src={servicesBrake} height="150px" width="170px" hspace="20" alt="" />
                    </p>
                    <p>At MIKES AUTOMOTIVE in Mandeville, La. all brake systems are diagnosed and tested by <br /> ASE-master
                    certified technician Mike Levytskyi. Mike has been servicing automobiles <br /> since 2000. Over the last 20
                    years Mike has performed thousand’s of brake jobs. He will <br /> test and diagnose your brake system problem
                    and determine what needs to be repaired. <br /> He can tell you if you need a brake pad replacement or if
                    you need any other brake services. <br /> He will determine what brake repair options you may have. </p>

                    {/* < br /> */}
                    <h3 style={{ 'textAlign': 'left' }}> Common brake problems include: </h3>

                    <ul style={{ "textAlign": "left", "display": "inline", "list-style-type": "none" }}>
                        <li>Squealing or grinding noise</li>
                        {/* <li>Brake pedal pulsating</li> */}
                        {/* <li>Brake pedal feels spongy</li> */}
                        <li>Steering wheel shakes, when braking</li>
                        <li>Brake fluid leaking</li>
                    </ul>

                    <br />

                    {/* <p style ={{'textAlign': 'left'}}> <b>
                The brake system is the most important safety system on your vehicle. Never put off brake inspections
                or any needed service or repair. Addressing problems early can save on more extensive and costly
                repairs down the road. </b> </p> */}
                </div>

            </Tab.Pane>
    },

    {
        menuItem: 'Batteries/ Starters/ Alternators', render: () =>
            <Tab.Pane>
                <div className="services2">
                    <h1 style={{ 'textAlign': 'left' }}>Battery Service and Repair</h1>
                    <p style={{ 'textAlign': 'left', 'float': 'left' }}><img src={servicesBattery} height="150px" width="170px" hspace="20" alt="" /></p>
                    <p>
                        At MIKES AUTOMOTIVE in Mandeville, La., we service/repair/replace batteries, starters, <br /> and alternators.
                        Diagnosis and testing is preformed by ASE-master certified technician Mike <br /> Levytskyi. If any service or repair
                        is performed, Mike does a complete inspection of the work. <br /> He also runs the engine and does a test drive.
                    </p>

                    {/* <br /> */}
                    <br />
                    <br />

                    <h3 style={{ 'textAlign': 'left' }}>
                        Some common battery problems are:
                </h3>

                    <ul style={{ "textAlign": "left", "display": "inline", "list-style-type": "none" }}>
                        <li>Engine won’t crank – (no noise at all)</li>
                        {/* <li>Starter making a series of click sounds</li> */}
                        {/* <li>No start, no lights, no power</li> */}
                        {/* <li>Battery light on with engine running</li> */}
                        <li>Hard to start when cold</li>
                        <li>Problems with electrical systems in the car</li>
                    </ul>

                    <br />

                    {/* <p style={{ 'textAlign': 'left' }}><b>
                        Because a battery is part of a larger system connected to other parts of the vehicle, a bad battery may
                        indicate a deeper problem.
                    </b></p> */}
                </div>

            </Tab.Pane>
    },

    {
        menuItem: 'Alignment/ Wheel Balance', render: () =>
            <Tab.Pane>
                <div className="services3">
                    <h1 style={{ 'textAlign': 'left' }}> Alignment Service and Repair </h1>

                    <p style={{ 'textAlign': 'left', 'float': 'left' }}> <img src={servicesTire} height="150px" width="170px" hspace="20" alt="" /></p>
                    <p>
                        AT MIKES AUTOMOTIVE on Girod street in Old Mandeville, La. all wheel alignments are <br /> performed by ASE-Master
                        Certified Technician Mike Levytskyi or one of his ASE-certified <br /> technicians. He started his career as an alignment specialist,
                        performing thousands of  <br /> alignments through the years. We can check to see if you need an alignment before its <br /> performed,
            often the alignment is O.K. Surprisingly a tire low on air pressure or out of <br /> balance can be the problem. </p>

                    {/* <br /> */}

                    <h3 style={{ 'textAlign': 'left' }}>Some of the things that can cause your alignment of going out of specification are: </h3>

                    <ul style={{ "textAlign": "left", "display": "inline", "list-style-type": "none" }}>
                        <li>Hitting pot holes</li>
                        <li>Bumping into a curb</li>
                        {/* <li>Regular bangs and bumps of rough roads</li> */}
                        {/* <li>Worn steering parts</li> */}
                        <li>Slack in your suspension</li>
                    </ul>

                    <br />

                    {/* <p style={{ 'textAlign': 'left' }}> <b>All of these can add up and eventually cause your vehicle to be out of alignment.</b></p> */}

                </div>

            </Tab.Pane>
    },

    {
        menuItem: 'Air Conditioning Service and Repair', render: () =>
            <Tab.Pane>
                <div className="services4">
                    <h1 style={{ 'textAlign': 'left' }}> A/C Performance Check</h1>

                    <p style={{ 'textAlign': 'left', 'float': 'left' }}><img src={servicesAC} height="150px" width="170px" hspace="20" alt="" /> </p>
                    <p>
                        At MIKES AUTOMOTIVE in Mandeville, La. all A/C systems are diagnosed and tested by <br /> ASE-master certified
                        technician Mike Levytskyi. He has also completed training and testing <br /> through EPA-approved A/C programs.
                        We have repaired thousand’s of air conditioning <br /> systems over the years. He will test and diagnose
                your A/C problems and determine <br />what needs to be repaired.</p>

                    {/* <br /> */}
                    <br />

                    <h3 style={{ 'textAlign': 'left' }}> Some common A/C problems are:</h3>

                    <ul style={{ "textAlign": "left", "display": "inline", "list-style-type": "none" }}>
                        {/* <li>Hot air blowing out vents</li> */}
                        <li>Air not cold enough</li>
                        {/* <li>Lack of air pressure</li> */}
                        <li>Noise coming from blower</li>
                        <li>A/C wont blow at all</li>
                    </ul>

                    <br />

                    {/* <p style={{ 'textAlign': 'left' }}><b>The number one problem we find is low refrigerant. The refrigerant in the system has a special compressor
                    oil mixed with it. When the refrigerant leaks out, so does the compressor oil. When enough refrigerant and refrigerant oil leaks out, the parts don’t get cooled and lubricated
                and they wear out. Addressing problems early can save on more extensive and costly repairs down the road.</b></p> */}
                </div>

            </Tab.Pane>
    },
]

class ServicesPage extends Component {
    render() {
        return (
            <div>
                <div className="ServicesTabsNav">
                    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />

                </div>
            </div>
        )
    }
}

export default ServicesPage;