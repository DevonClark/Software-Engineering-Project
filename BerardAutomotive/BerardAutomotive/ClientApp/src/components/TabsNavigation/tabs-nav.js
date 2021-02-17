import React from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";

function TabsNav() {
    return (
        <div className="tabsNav">
            <Tabs>
                <TabList>
                    {/* css tab stayed on default 1st tab and wouldn't move when you clicked a different tab so i made the first tab display none. this is why i have 2 services links */}
                    <Link to="/home/services"> <Tab> Services </Tab> </Link>
                    <Link to="/home/services"> <Tab> Services </Tab> </Link>
                    <Link to="/home/about"><Tab>About Us</Tab> </Link>
                    <Link to="/home/contact"><Tab>Contact Us</Tab> </Link>
                </TabList>
            </Tabs>
        </div>

    )
}

export default TabsNav;
