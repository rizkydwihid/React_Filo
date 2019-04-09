import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class HeaderUser extends Component {
    postSignout = () =>{
        localStorage.clear();
        this.props.postLogout();
        this.props.history.replace("/profile");
    }
    render() {
        return (
            <ul class="navbar-nav ml-auto text-center">
                <li className="nav-item mr-3" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link className="nav-link" to="/about"><i className="fas fa-info-circle"></i> Tentang Kami</Link>
                </li>
                <li class="nav-item mr-3" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link class="nav-link" to='/profile'><i class="fas fa-user-circle"></i> Profil</Link>
                </li>
                <li className="nav-item mr-3" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link className="nav-link" to="/findcouns"><i class="fas fa-address-book"></i> Temui Konselor</Link>
                </li>
                <li class="nav-item mr-3" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link class="nav-link" to='/login'
                        onClick={() => this.postSignout()}>
                    <i class="fas fa-sign-out-alt"></i> Keluar</Link>
                </li>
            </ul>
        )
    }
}

export default withRouter(HeaderUser)