import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            scrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.setState(
                {scrolled: true}
            ) } else if (window.scrollY === 0) {
                this.setState(
                 {scrolled: false}
                ) }
            })
    }

    
    

    render() 
    {    return (
        <div className = {!this.state.scrolled ? 'nav-bar-container' : 'nav-bar-container-scrolled'}>
            <div className = {!this.state.scrolled ? 'nav-bar' : 'nav-bar-scrolled'}>
                <NavLink to='/' className = 'home-button'>
                    <div className = 'name'> 
                        Nish Lingam 
                    </div>
                </NavLink>
                <div className = 'nav-bar-right'>
                    <NavLink to='/' className = 'home-button'>
                        HOME
                    </NavLink>
                    <NavLink to = '/portfolio' className = 'portfolio-button' >
                        PORTFOLIO
                    </NavLink>
                </div>
            </div>
        </div>
    )}
}

export default NavBar;
