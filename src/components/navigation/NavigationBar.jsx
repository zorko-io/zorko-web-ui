import logo from '../../logo.png';
import React, {Component} from "react";

class NavigationBar extends Component {

    render() {
        return (
            <nav className="navbar" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://www.zorko.io">
                        <img src={logo}
                             alt="Zorko: a place to discover and share visualizations"/>
                    </a>
                    <div className="navbar-burger burger" data-target="navMenuTarget">
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </div>
                <div id="navMenuTarget" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <a className="button  is-primary" disabled={true}>Sing in</a>
                        </div>
                    </div>
                </div>

            </nav>
        );
    }
}

export default NavigationBar;