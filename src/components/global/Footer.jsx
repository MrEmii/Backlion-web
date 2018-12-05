import React, {Component} from "react";

import './assets/footer.css'

export default class Footer extends Component {

    render(){
        return(
            <div className="footer">
                <div className="footer-divider yellow"></div>
                <div className="footer-container">
                    <div className="wrap">
                        <a href="" style={{color: "white"}}>© 2018 Old Times, Inc.</a>
                        <div className="footer-links">
                            <a href="">Rules</a>
                            <a href="">Terms of Use</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Resources</a>
                            <a href="">About</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
};
