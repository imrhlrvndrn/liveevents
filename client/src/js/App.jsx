import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// Components
import Home from './components/Home';
import About from './components/About';
import AllEvents from './components/AllEvents';
import EventPage from './components/EventPage/EventPage';
import EventAbout from './components/EventPage/About/About';
import Schedule from './components/EventPage/Schedule/Schedule';
import Auth from './components/Auth/Auth';
import SalesDashboard from './components/Dashboard/SalesDashboard';

// Css files
import '../css/color.css';
import '../css/home.scss';
import '../css/about.scss';
import '../css/events.scss';
import '../css/auth.scss';
import '../css/nav.scss';
import '../css/salesDashboard.scss';
import '../css/reset.scss';

function App() {
    return (
        <>
            <Router>
                {/* <Redirect to="/auth" from="/" /> */}
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/events' exact component={AllEvents} />
                <Route path='/event/:slug' exact component={EventPage} />
                <Route path='/event/:slug/about' exact component={EventAbout} />
                <Route path='/event/:slug/schedule' exact component={Schedule} />
                <Route path='/event/:slug/venue' exact component={EventPage} />
                <Route path='/auth' exact component={Auth} />
                <Route path='/dashboard' exact component={SalesDashboard} />
            </Router>
        </>
    );
}

export default App;
