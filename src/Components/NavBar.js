import React, { Component } from 'react';

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
                <div className = 'name'> 
                    Nish Lingam
                </div>
                <div className = 'nav-bar-right'>
                    <div className = 'home-button'>
                        HOME
                    </div>
                    <div className = 'portfolio-button'>
                        PORTFOLIO
                    </div>
                </div>
            </div>
        </div>
    )}
}

export default NavBar;
