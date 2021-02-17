import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'react-tabs/style/react-tabs.css';
import './Header.css'
import './Footer.css'
import './App.css';
import ServicesPage from './pages/services-page';
import { ContactPage } from './pages/contact-page';
import AboutPage from './pages/about-page';
import MainPage from './pages/main-page';
import 'semantic-ui-css/semantic.min.css'
import TabsNav from './components/TabsNavigation/tabs-nav';
import 'react-tabs/style/react-tabs.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const MainRoutes = () => {
    return (
        <>
            <Router>
                <Header />
                <Footer />
                <TabsNav />
                <Switch>
                    <Route exact path={"/home"} component={MainPage} />
                    <Route exact path={"/home/contact"} component={ContactPage} />
                    <Route exact path={"/home/about"} component={AboutPage} />
                    <Route exact path={"/home/services"} component={ServicesPage} />
                </Switch>
            </Router>
        </>
    )
}