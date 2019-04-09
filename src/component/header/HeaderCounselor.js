
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import SignOut from './SignOut';
import { withRouter } from 'react-router-dom';
// import { connect } from 'unistore/react';
// import { actions } from '../../store';
// import { Redirect } from 'react-router-dom';

class HeaderCounselor extends Component {
    postSignout = () =>{
        localStorage.clear();
        this.props.postLogout();
        this.props.history.replace("/");
    }
    render() {
        return (
            <ul class="navbar-nav ml-auto text-center">
                <li className="nav-item mr-3" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link className="nav-link" to="/about"><i className="fas fa-info-circle"></i> Tentang Kami</Link>
                </li>
                <li class="nav-item mr-3" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link class="nav-link" to='/profilecouns'><i class="fas fa-user-circle"></i> Profil</Link>
                </li>
                <li class="nav-item mr-3" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link class="nav-link" to='/logcounselor'
                        onClick={() => this.postSignout()}>
                        <i class="fas fa-sign-out-alt"></i> Keluar</Link>
                </li>
            </ul>
        )
    }
}

export default withRouter(HeaderCounselor)