import React, {Component} from 'react';
import HeaderPublic from '../header/HeaderPublic';
import HeaderCounselor from '../header/HeaderCounselor';
import HeaderUser from '../header/HeaderUser';
import {Link} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../../store';
import '../../assets/css/header.css';

class Header extends Component {
    render() {
        if ((!this.props.is_login) && (this.props.statusUser === "")) {
            return (
                <header>
                    <nav className="navbar navbar-expand-lg fixed-top menu">
                    {/* <div className="col-4"> */}
                        <Link className="navbar-brand" to="/about"><img src={require('../../assets/img/r.png')}  height="40px" alt="" /></Link>
                    {/* </div> */}
                    
                        <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="expand-icon fas fa-bars"></i>
                        </button>
                    
                        <div className="collapse navbar-collapse float-right pr-2" id="navbarSupportedContent">
                            <HeaderPublic />
                        </div>
                    </nav>
                    <div className="backbox"></div>
                    <div className="bg-head"></div>
                </header>
            )
        } else if ((this.props.is_login == true) && (this.props.statusUser === 'counselor')) {
            return (
                <header>
                    <nav className="navbar navbar-expand-lg fixed-top menu">
                    {/* <div className="col-4"> */}
                        <Link className="navbar-brand" to="/about"><img src={require('../../assets/img/r.png')}  height="40px" alt="" /></Link>
                    {/* </div> */}
                    
                        <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="expand-icon fas fa-bars"></i>
                        </button>
                    
                        <div className="collapse navbar-collapse float-right pr-2" id="navbarSupportedContent">
                            <HeaderCounselor />
                        </div>
                    </nav>
                    <div className="backbox"></div>
                </header>
            )
        } else if ((this.props.is_login) && (this.props.statusUser === 'user')) {
            return (
                <header>
                    <nav className="navbar navbar-expand-lg fixed-top menu">
                    {/* <div className="col-4"> */}
                        <Link className="navbar-brand" to="/about"><img src={require("../../assets/img/r.png")}  height="40px" alt="" /></Link>
                    {/* </div> */}
                    
                        <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="expand-icon fas fa-bars"></i>
                        </button>
                    
                        <div className="collapse navbar-collapse float-right pr-2" id="navbarSupportedContent">
                            <HeaderUser />
                        </div>
                    </nav>
                    <div className="backbox"></div>
                </header>
            )
        }
    }
}
export default connect(
    'is_login, statusUser', actions
)(withRouter(Header));