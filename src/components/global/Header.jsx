import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown, faShoppingCart, faSearch} from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import Typing from 'react-typing-animation';

import './assets/header.css';

import logo from './assets/images/logo.png'

export default class Header extends Component {

    componentDidMount(){
       
    }

    loginClick = () =>{
        var btn = document.getElementById('logclick');
        var forml = document.getElementById('formlogin');
        var menus = $(".dropdown");
        var btna = $(".active");
        if(btn.classList.contains('active')){
            btn.classList.remove('active')
            forml.classList.add('hide');
        }else{
            menus.addClass('hide');
            btna.removeClass('active');
            btn.classList.add('active')
            forml.classList.remove('hide');
        }       
    }

    infoClick = () =>{
        var btn = document.getElementById('infobtn');
        var forml = document.getElementById('infom');
        var menus = $(".dropdown");
        var btna = $(".active");
        if(btn.classList.contains('active')){
            btn.classList.remove('active')
            forml.classList.add('hide');
        }else{
            menus.addClass('hide');
            btna.removeClass('active');
            btn.classList.add('active')
            forml.classList.remove('hide');
        }       
    }
    statsClick = () =>{
        var btn = document.getElementById('statsbtn');
        var forml = document.getElementById('statsm');
        var menus = $(".dropdown");
        var btna = $(".active");
        if(btn.classList.contains('active')){
            btn.classList.remove('active')
            forml.classList.add('hide');
        }else{
            menus.addClass('hide');
            btna.removeClass('active');
            btn.classList.add('active')
            forml.classList.remove('hide');
        }       
    }
    gameClick = () =>{
        var btn = document.getElementById('gamesbtn');
        var forml = document.getElementById('gamesm');
        var menus = $(".dropdown");
        var btna = $(".active");
        if(btn.classList.contains('active')){
            btn.classList.remove('active')
            forml.classList.add('hide');
        }else{
            menus.addClass('hide');
            btna.removeClass('active');
            btn.classList.add('active')
            forml.classList.remove('hide');
        }       
    }
    
    render(){
           return(
            <div className="header">
                <div className="upper">
                    <div className="wrap">
                        <a className="logo" href="">
                            <img src={logo} alt=""/>
                        </a>
                        <div className="server-ip">
                          Server IP:                                                   
                          <Typing speed={70} loop={true}>
                               <span className="typed-server-ip">NA.OLDTIMESMC.NET</span> 
                               <Typing.Reset count={1} delay={2000} />
                            </Typing>
                        </div>
                        <div className="logged-out">
                            <a href="">Sign up</a>
                            <div className="login-container">
                                <a id="logclick" onClick={this.loginClick} className="">
                                    Log in
                                    <FontAwesomeIcon className="fa" icon={faCaretDown}/>
                                </a> 
                                <div id="formlogin" className="dropdown dark-blue large move-up hide">
                                    <form action="" method="post">
                                        <input type="hidden" name="csrf_token" value=""/>
                                        <input className="input-text" type="text" placeholder="Username" name="username"/>
                                        <input className="input-text" type="password" placeholder="Password" name="password"/>
                                        <label style={{color: "white"}}><input type="checkbox" name="remember_me"/>Remember Me</label>
                                        <a href="">Forgot Password?</a>
                                        <button name="form.submitted">Sign In</button>
                                    </form>
                                </div>
                                
                            </div>
                        </div>
                        <a className="store-button" href="">
                            <FontAwesomeIcon className="store-button-text button-shop fa" icon={faShoppingCart} />
                            <span className="store-button-text">Store</span>
                            <span className="store-sale-text">50% Off!</span>
                        </a>
                        <form className="search-box search-logged-out-width" action="" method="post">
                            <input name="username_search" type="text" placeholder="Search for Player"/>
                            <button><FontAwesomeIcon className="fa" icon={faSearch} /></button>
                        </form>
                    </div>
            
                </div>
                <div className="lower">
                    <div className="wrap">
                      <span className="players-online" >Players Online 600</span>
                     
                      <div className="nav-item-container">
                        <a id="gamesbtn" onClick={this.gameClick} href="#">Games<FontAwesomeIcon className="fa" icon={faCaretDown}/></a>
                        <div id="gamesm" className="dropdown flip-aligment-on-small-screens medium hide">
                          <div className="dropdown-label">UHC</div>
                          <div className="dropdown-group">
                            <a href="">Rental Panel</a>
                            <a href="">UHC Elite</a>
                            <a href="">Upcoming Matches</a>
                            <a href="">Calendar</a>
                           </div>
                        </div>
                      </div>  
                      <div className="nav-item-container">
                        <a id="statsbtn" onClick={this.statsClick}>Stats
                        <FontAwesomeIcon className="fa" style={{marginLeft: '5px'}} icon={faCaretDown} /></a>
                        <div id="statsm" className="dropdown flip-aligment-on-small-screens medium hide">
                            <div className="dropdown-label">Levels &amp; Experience</div>
                            <div className="dropdown-group">
                                <a href="">All Time</a>
                                <a href="">Monthly</a>
                                <a href="">Weekly</a>
                            </div>
                            <div className="dropdown-label">ArenaPvP</div>
                            <div className="dropdown-group">
                                <a href="">1v1</a>
                                <a href="">2v2</a>
                                <a href="">3v3</a>
                                <a href="">TDM</a>
                                <a href="">FFA</a>
                            </div>
                            <div className="dropdown-label">UHC</div>
                            <div className="dropdown-group">
                                <a href="">Ratings</a>
                                <a href="">Stats</a>
                            </div>
                            <div className="dropdown-label">Survival Games</div>
                            <div className="dropdown-group">
                                <a href="">Ratings</a>
                                <a href="">Stats</a>
                            </div>
                            <div className="dropdown-label">UHC Survival Games</div>
                            <div className="dropdown-group">
                                <a href="">Ratings</a>
                                <a href="">Stats</a>
                            </div>
                            <div className="dropdown-label">UHC Meetup</div>
                            <div className="dropdown-group">
                                <a href="">Ratings</a>
                                <a href="">Stats</a>
                            </div>
                            <div className="dropdown-label">Capture the Flag</div>
                            <div className="dropdown-group">
                                <a href="">Stats</a>
                            </div>
                            <div className="dropdown-label">Capture the Wool</div>
                            <div className="dropdown-group">
                                <a href="">Stats</a>
                            </div>
                        </div>
                      </div>
                      <a href="">Client</a>
                      
                      <a href="">Forums</a>  
                      <div className="nav-item-container">
                        <a id="infobtn" onClick={this.infoClick}>Info
                        <FontAwesomeIcon className="fa" style={{marginLeft: '5px'}} icon={faCaretDown} /></a>
                        <div id="infom" class="dropdown hide">
                            <a href="">Rules</a>
                            <a href="">Staff</a>
                            <a href="">Clans</a>
                            <a href="">Appeals</a>
                            <a href="">Click Test</a>
                            <a href="">Discord</a>
                        </div>
                      </div>
                      
                      
                         <a href="">Help</a>
                    </div>
                </div>
            </div>
        );
    }
};
